"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_route_1 = __importDefault(require("./routes/api.route"));
const main_route_1 = __importDefault(require("./routes/main.route"));
const helpers_1 = require("./helpers");
const cors_1 = __importDefault(require("cors"));
const port = helpers_1.LoadEnv.API_PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(main_route_1.default);
app.use(api_route_1.default);
app.listen(port, () => {
    console.log(`Express listening in port ${port}`);
});
