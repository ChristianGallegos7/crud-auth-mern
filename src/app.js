import express from 'express'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cors from 'cors'
const app = express();
//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
//routes
app.use('/api', authRoutes)
app.use('/api', tasksRoutes)

export default app