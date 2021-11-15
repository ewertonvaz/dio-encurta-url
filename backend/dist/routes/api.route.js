"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_main_page_1 = __importDefault(require("../pages/api.main.page"));
const URL_controller_1 = require("../controllers/URL.controller");
const apiRoute = (0, express_1.Router)();
const rootUrl = '/api';
apiRoute.get(rootUrl, (req, res, next) => {
    try {
        res.status(200).send((0, api_main_page_1.default)());
    }
    catch (error) {
        next(error);
    }
});
apiRoute.post(rootUrl + '/generate', new URL_controller_1.URLController().shorten);
exports.default = apiRoute;
