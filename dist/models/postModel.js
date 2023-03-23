"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var postSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: [true, 'you have to write something bro'],
        trim: true,
    },
    createdAt: {
        type: Date,
        required: [true, ""],
        trim: true,
        default: Date
    },
    updatedAt: {
        type: Date,
        required: [true, ""],
        default: Date,
        trim: true,
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Post = mongoose_1.default.model('Post', postSchema);
//# sourceMappingURL=postModel.js.map