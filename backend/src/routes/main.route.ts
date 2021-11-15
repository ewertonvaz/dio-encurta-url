import { NextFunction, Request, Response, Router } from 'express';
import mainPage from '../pages/main.page';

const mainRoute = Router();
const rootUrl = '/';

mainRoute.get(rootUrl, (req: Request, res: Response, next: NextFunction) => {
    const content = mainPage();
    res.status(200).send(content)
});

export default mainRoute;