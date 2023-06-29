import express from 'express'

export function newTodoController(service) {
    const router = express.Router();

    router.get('/all', async (req, res) => {
        const result = await service.getAllTodo()

        res.status(200);
        res.json(result);
    })

    router.post('/new', async(req, res) => {
        if (!req.body.title || !req.body.description) {
            res.status(400);
            res.json({'error': 'not necessary body', 'code': 1});
            return;
        }

        const data = [
            req.body.title,
            req.body.description,
            req.body.author,
            req.body.deadline
        ];

        const err = await service.insertTodo(data);
        if (err) {
            res.status(500)
            res.json({'error': err, 'code': '2'});
            return
        }

        res.status(200)
        res.json({'code': 0});
    })

    router.get('/', (req, res) => {
        res.status(200);
        res.send('pong');
    })

    return {
        controller: router
    }
}
