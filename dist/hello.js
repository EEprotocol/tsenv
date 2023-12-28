"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p5_1 = __importDefault(require("p5"));
const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(400, 400);
    };
    p.draw = () => {
        p.background(220);
        p.ellipse(50, 50, 80, 80);
    };
};
new p5_1.default(sketch);
const message = "Hello World";
console.log(message);
