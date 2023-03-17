"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.jetLogger = exports.Formats = exports.LoggerModes = void 0;
var jetLogger_1 = require("./jetLogger");
Object.defineProperty(exports, "LoggerModes", { enumerable: true, get: function () { return jetLogger_1.LoggerModes; } });
Object.defineProperty(exports, "Formats", { enumerable: true, get: function () { return jetLogger_1.Formats; } });
Object.defineProperty(exports, "jetLogger", { enumerable: true, get: function () { return jetLogger_1.jetLogger; } });
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(jetLogger_1).default; } });
