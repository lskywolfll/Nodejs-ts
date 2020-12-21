import express from 'express';
const app:express.Application = express();

app.get('/Persona', async (req, res) => {
    res.status(200).json({
        ok: true,
        data: "Holi!"
    })
});

export default app;