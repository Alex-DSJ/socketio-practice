import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { registerSocket } from './socket.js';

const app = express();

app.use(cors());

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000']
  }
});

io.on('connection', socket => {
  console.log('a socket connected with id: ', socket.id);
  registerSocket(socket);
})

httpServer.listen(8080, () => console.log('Sever is listening on 8080'));