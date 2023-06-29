import express from 'express'

const router = express.Router();

router.get('/', (request, response) => {
    response.send('<h1>Todo controller</h1>')
})

export default router;