"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const helpers_1 = require("../helpers");
const mongoose_1 = __importDefault(require("mongoose"));
const config = helpers_1.LoadEnv.API_MONGO_CONNECTION;
class MongoConnection {
    async connect() {
        try {
            await mongoose_1.default.connect(config);
            console.log('Conectado ao mongo');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.MongoConnection = MongoConnection;
