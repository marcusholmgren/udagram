import { Request, Response, Router } from 'express';
import { FeedItem, Patch } from '../models';
import { requireAuth } from '../../users/middleware/auth';
import * as AWS from '../../../../aws';

const router: Router = Router();

// Get all feed items
router.get('/', async (req: Request, res: Response) => {
  const items = await FeedItem.findAndCountAll({ order: [['id', 'DESC']] });
  items.rows.map((item) => {
    if (item.url) {
      item.url = AWS.getGetSignedUrl(item.url);
    }
  });
  res.send(items);
});

//@TODO
//Add an endpoint to GET a specific resource by Primary Key
router.get('/:id', requireAuth, (req: Request, res: Response) => {
  const id = req.params.id;

  FeedItem.findByPk(id)
    .then((item) => {
      if (item) {
        res.send(item);
      } else {
        res.status(404).send({ message: `No item with id: ${id} could be found.` });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(400);
    });
});

// update a specific resource
router.patch('/:id', requireAuth, async (req: Request, res: Response) => {
  const id = req.params.id;
  const operations: Patch[] = req.body;

  if (id) {
    const item = await FeedItem.findByPk(id);
    if (item) {
      operations.forEach((x) => {
        switch (x.op) {
          case 'update':
            if ('url' === x.variable && item.url !== x.value) {
              item.url = x.value;
            }
            if ('caption' === x.variable && item.caption !== x.value) {
              item.caption = x.value;
            }
        }
      });

      if (item.changed()) {
        await item.save();
        res.status(204).send();
      } else {
        res.status(200).send();
      }
    } else {
      res.send(404).send({ message: `No item with id: ${id} could be found.` });
    }
  } else {
    //@TODO try it yourself
    res.send(400).send({ message: 'Id is required or malformed' });
  }
});

// Get a signed url to put a new item in the bucket
router.get('/signed-url/:fileName', requireAuth, async (req: Request, res: Response) => {
  let { fileName } = req.params;
  const url = AWS.getPutSignedUrl(fileName);
  console.log(`Upload S3 for ${fileName} on url: ${url}`)
  res.status(201).send({ url: url });
});

// Post meta data and the filename after a file is uploaded
// NOTE the file name is they key name in the s3 bucket.
// body : {caption: string, fileName: string};
router.post('/', requireAuth, async (req: Request, res: Response) => {
  const caption = req.body.caption;
  const fileName = req.body.url;

  // check Caption is valid
  if (!caption) {
    return res.status(400).send({ message: 'Caption is required or malformed' });
  }

  // check Filename is valid
  if (!fileName) {
    return res.status(400).send({ message: 'File url is required' });
  }

  const item = await new FeedItem({
    caption: caption,
    url: fileName,
  });

  const saved_item = await item.save();

  saved_item.url = AWS.getGetSignedUrl(saved_item.url);
  console.log(`Save item ${JSON.stringify(item)}`)
  res.status(201).send(saved_item);
});

export const FeedRouter: Router = router;
