"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const helpers_1 = require("../helpers");
const mongo_connection_1 = require("../database/mongo.connection");
const URL_model_1 = require("../models/URL.model");
let mainUrl = process.env.API_URL;
if (!mainUrl) {
    mainUrl = helpers_1.LoadEnv.API_URL;
}
const port = process.env.API_PORT;
const apiUrl = !!port ? mainUrl + ':' + port : mainUrl;
const database = new mongo_connection_1.MongoConnection();
database.connect();
class URLController {
    async shorten(req, res) {
        const { originUrl } = req.body;
        const url = await URL_model_1.UrlModel.findOne({ originUrl });
        if (url) {
            res.json(url);
            return;
        }
        const hash = shortid_1.default.generate();
        const shortUrl = `${apiUrl}/${hash}`;
        const newUrl = await URL_model_1.UrlModel.create({ hash, shortUrl, originUrl });
        res.json(newUrl);
    }
    async findurl(req, res, next) {
        const { hash } = req.params;
        if (hash === 'api') {
            next();
            return;
        }
        const url = await URL_model_1.UrlModel.findOne({ hash });
        if (url) {
            res.redirect(url.originUrl);
            return;
        }
        else {
            res.status(400).json({ error: 'URL not found' });
        }
    }
}
exports.URLController = URLController;
