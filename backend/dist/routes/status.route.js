"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusRoute = (0, express_1.Router)();
const rootUrl = '/status';
statusRoute.get(rootUrl, (req, res, next) => {
    res.status(200).send({ msg: `The status route (${rootUrl})  is UP!`, requestUrl: `Request from : ${req.url}` });
});
exports.default = statusRoute;
