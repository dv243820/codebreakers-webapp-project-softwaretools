import express from 'express'
import { caesarsolve } from "./caesar"
import * as path from 'path'
const bodyParser = require('body-parser')
class App {
    public express


    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {

        const router = express.Router()
        this.express.set('views', __dirname)
        this.express.set('view engine', 'ejs')
        this.express.use(express.static(__dirname))

        // GET request to load the form
        router.get('/', (req, res) => {
            res.render(__dirname + '/' + 'public' + '/' + 'index.ejs')
        })

        // Serve static files (e.g. CSS)
        router.get('/style.css', function (req, res) {
            res.sendFile(__dirname + "/" + "style.css");
        });

        this.express.use(express.static("public"))
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use('/', router)
    }

}

export default new App().express //exports our shit as a module but idk if we'll use this except if we decide to majorly restructure the app