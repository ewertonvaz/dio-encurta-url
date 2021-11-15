import { NextFunction, Request, Response, Router } from 'express';
import apiMainPage from '../pages/api.main.page';

const apiRoute = Router();
const rootUrl = '/api'

apiRoute.get(rootUrl, (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(apiMainPage())
});

export default apiRoute;