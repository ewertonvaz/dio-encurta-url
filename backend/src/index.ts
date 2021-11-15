import express from 'express';
import apiRoute from './routes/api.route';
import mainRoute from './routes/main.route';
import { LoadEnv } from './helpers';

const port = LoadEnv.API_PORT;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(mainRoute);
app.use(apiRoute);
// const database = new MongoConnection()
// database.connect()

// const urlController = new URLController()
// app.post('/shorten', urlController.shorten)
// app.get('/:hash', urlController.redirect)
app.listen(port, () => {
    console.log(`Express listening in port ${port}`);
})