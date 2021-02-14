import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import { NextFunction } from 'connect';

import {config} from "../../../../config/config";


export function requireAuth(req: Request, res: Response, next: NextFunction) {
    /*
   if (req.headers && req.headers.authorization) {
     // dummy authorization because of bug in Angular frontend that I don't want to solve 🥵
     // Example header -H 'Authorization: jwt undefined,jwt null,jwt undefined,jwt null,jwt eyJh....'
     console.log(`Dummy is authorized: ${req.headers.authorization}`)
     return next();
   }
   */

  if (!req.headers || !req.headers.authorization){
      return res.status(401).send({ message: 'No authorization headers.' });
  }

  const token_bearer = req.headers.authorization.split(' ');
  if(token_bearer.length != 2){
      return res.status(401).send({ message: 'Malformed token.' });
  }

  const token = token_bearer.slice(-1)[0];

  return jwt.verify(token, config.jwt.secret, (err, decoded) => {
    if (err) {
      // JsonWebTokenError: invalid token
      return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
    }
    return next();
  });
}
