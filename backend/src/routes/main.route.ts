import { NextFunction, Request, Response, Router } from 'express';
import mainPage from '../pages/main.page';
import { URLController} from '../controllers/URL.controller';

const mainRoute = Router();
const rootUrl = '/';

mainRoute.get(rootUrl + ':hash', (req: Request, res: Response, next: NextFunction) => {
    try {
        new URLController().findurl(req, res, next);
    } catch(error) {
        next(error)
    }
});

mainRoute.get(rootUrl, (req: Request, res: Response, next: NextFunction) => {
    const content = mainPage();
    res.status(200).send(content)
});

export default mainRoute;