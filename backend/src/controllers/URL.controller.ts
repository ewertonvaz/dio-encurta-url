import { NextFunction, Request, Response } from 'express';
import shortId from 'shortid';
import { LoadEnv } from '../helpers';
import { MongoConnection } from '../database/mongo.connection';
import { UrlModel } from '../models/URL.model';

let mainUrl = process.env.API_URL;
if (!mainUrl) { 
    mainUrl = LoadEnv.API_URL;
}
const port = process.env.API_PORT;
const apiUrl = !!port ? mainUrl + ':' + port : mainUrl;
const database = new MongoConnection();
database.connect();

export class URLController {

    public async shorten(req: Request, res: Response): Promise <any> {
        const { originUrl } = req.body;
        const url = await UrlModel.findOne({originUrl});
        if(url){
            res.json( url );
            return;
        }
        const hash = shortId.generate();
        const shortUrl = `${apiUrl}/${hash}`;
        const newUrl = await UrlModel.create({ hash, shortUrl, originUrl });
        res.json( newUrl );
    }

    public async findurl(req: Request, res: Response, next: NextFunction) : Promise <any> {
        const { hash } = req.params;
        if (hash === 'api') { 
            next();
            return;
        }
        const url = await UrlModel.findOne({hash});
        if (url) {
            res.redirect(url.originUrl); //Se não for uma fully-qualified URL redireciona relativo ao root do site local 
            return;
        } else  {
           res.status(400).json({error: 'URL not found'});
        }
    }
}