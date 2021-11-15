"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
class LoadEnv {
    constructor() {
        this.fromDotEnv = () => {
            dotenv_1.default.config();
        };
    }
}
exports.LoadEnv = LoadEnv;
LoadEnv.API_ENVIRONMENT = 'prod';
LoadEnv.API_PORT = '5000';
LoadEnv.API_URL = 'http://node-server';
LoadEnv.API_MONGO_CONNECTION = 'mongodb://root:example@mongo-backend:27017';
