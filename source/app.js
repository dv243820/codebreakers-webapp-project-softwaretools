"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express_1.default.Router();
        this.express.set('views', __dirname);
        this.express.set('view engine', 'ejs');
        this.express.use(express_1.default.static(__dirname));
        // GET request to load the form
        router.get('/', (req, res) => {
            res.render(__dirname + '/' + 'public' + '/' + 'index.ejs');
        });
        // Serve static files (e.g. CSS)
        router.get('/style.css', function (req, res) {
            res.sendFile(__dirname + "/" + "style.css");
        });
        this.express.use(express_1.default.static("public"));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use('/', router);
    }
}
exports.default = new App().express; //exports our shit as a module but idk if we'll use this except if we decide to majorly restructure the app
