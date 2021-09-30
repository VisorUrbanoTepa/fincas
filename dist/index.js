"use strict";
// // import { worshop } from './finca';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // console.log(worshop.finca("demo"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const indext_1 = __importDefault(require("./routes/indext"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(indext_1.default);
app.listen(4000);
console.log('Server on port', 4000);
