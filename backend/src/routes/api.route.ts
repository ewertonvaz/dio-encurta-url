import { NextFunction, Request, Response, Router } from 'express';
import apiMainPage from '../pages/api.main.page';
import { URLController} from '../controllers/URL.controller';

const apiRoute = Router();
const rootUrl = '/api'

apiRoute.get(rootUrl, (req: Request, res: Response, next: NextFunction) => {
    try{
        res.status(200).send(apiMainPage())
    } catch(error) {
        next(error);
    }
});

apiRoute.post(rootUrl+'/generate', new URLController().shorten)

export default apiRoute;