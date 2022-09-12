import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json([
        { id: 1, name: 'Ad 1'},
        { id: 2, name: 'Ad 2'},
        { id: 3, name: 'Ad 3'},
        { id: 4, name: 'Ad 4'},
    ]);
});

app.listen(3333, () => {
    console.log('Server is up and running... 🚀⚡')
});