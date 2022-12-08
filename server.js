import minimist from 'minimist';
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import bodyParser from 'body-parser';

const loginRouter = express.Router();
const createAccountRouter = express.Router(); //new line
const app = express();

const port = 5000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.rinnbhn.mongodb.net/Team15_Project?retryWrites=true&w=majority`
const client = new MongoClient(uri);

app.use(cors({ origin: true, credentials: true, optionsSuccessStatus: 200 }));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});


/* find(),findOne() 
*/
try {
    await client.connect();
    const db = client.db();
    console.log('connected to MongoDB');
    const user = { "username": "Bob", "password": "password123", "email": "bob@gmail.com", "rolls": 2, "correct": 1 }
    /* db.collection("Users").insertOne(user, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    }); */

    const res = await db.collection("Users").find({}).toArray();
    console.log(res)
}
catch (error) {
    console.error(error);
}

loginRouter
    .post('/', (req, res, error) => {
        console.log(req.body);
        res.status(200).send('200 OK');
    });
createAccountRouter.post('/', (req, res, error) => {
    console.log(req.body);
    res.status(200).send('200 OK');
});
/*default api endpoint that returns 404 NOT FOUND for
endpoints that aren't defined */
app.use('/login', loginRouter);
app.use('/create-account', createAccountRouter);
app.all('*', (req, res) => {
    console.log('oops')
    res.status(404).send('404 NOT FOUND');
});

app.listen(port);