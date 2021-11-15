"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_page_1 = __importDefault(require("../pages/main.page"));
const mainRoute = (0, express_1.Router)();
const rootUrl = '/';
mainRoute.get(rootUrl, (req, res, next) => {
    const content = (0, main_page_1.default)();
    res.status(200).send(content);
});
exports.default = mainRoute;
