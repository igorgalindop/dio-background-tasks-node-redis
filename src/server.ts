import 'dotenv/config'
import express from 'express'
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import UserController from './app/controllers/UserController'
import Queue from './app/lib/Queue'

const app = express()

const bullAdapters = Queue.queues.map(queue => new BullAdapter(queue.bull));
const { router } = createBullBoard(bullAdapters);


app.use(express.json())

app.post('/users', UserController.store)

app.use('/admin/queue', router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
})