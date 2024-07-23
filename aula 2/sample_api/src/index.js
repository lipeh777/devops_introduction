const express =  require('express')
const cors =  require('cors')
const os =  require('os')
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

console.log(os.hostname());

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.send({
        hostname: os.hostname(),
    });
});

app.post('/create-file', async (req, res) => {
    try {
        const { filename, content } = req.body;
        await fs.writeFileSync(`${__dirname}/files/${filename}`, content, { encoding: 'utf-8' });
        return res.send({ message: 'File created successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

app.get('/read-file/:filename', async (req, res) => {
    try {
        const content = await fs.readFileSync(`${__dirname}/files/${req.params.filename}`, { encoding: 'utf-8' }).toString();
        return res.send(content);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port ${process.env.PORT || 3001}`);
});