import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  /**
     GET /filteredimage?image_url={{URL}}
        endpoint to filter an image from a public url.
     IT SHOULD
         1. validate the image_url query
         2. call filterImageFromURL(image_url) to filter the image
         3. send the resulting file in the response
         4. deletes any files on the server on finish of the response
     QUERY PARAMATERS
        image_url: URL of a publicly accessible image
     RETURNS
        the filtered image file
     */
  app.get('/filteredimage', async (req: Request, res: Response) => {
    const image_url = req.query.image_url as string;

    if (image_url && /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(image_url)) {
      console.log('Requested image_url:', image_url);
      try {
        const image_path = await filterImageFromURL(image_url);
        if (image_path) {
          res.status(200).sendFile(image_path);

          res.on('finish', () => {
            deleteLocalFiles([image_path]).catch((error) =>
              console.error(`Failed to cleanup image: ${image_path}. Error: ${error}`)
            );
          });
        }
      } catch (error) {
        console.error(`Unhandled error: ${error}`);
        res.status(422).send(`This was unexpected: ${error}`);
      }
    } else {
      res.status(400).json({
        message: 'Please provide query parameter [image_url] with a valid URL',
      });
    }
  });
  /**************************************************************************** */

  //! END @TODO1

  /** Root Endpoint
     Displays a simple message to the user */
  app.get('/', async (req: Request, res: Response) => {
    res.json({
      message: 'try GET /filteredimage?image_url={{}}',
      href: '/filteredimage?image_url={{}}',
    });
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
