
import Express from 'express'
import cors from 'cors'
import passport from 'passport'

import apiErrorHandlers from './middleware/apiErrorHandlers'
import productRouter from './routers/products'
import userRouter from './routers/users'
import {jwtStrategy}  from './config/passport'

const app=Express()

app.use(Express.json())
app.use(cors())
app.use(passport.initialize())


app.use("/product", productRouter)
app.use("/user", userRouter)
app.use(apiErrorHandlers)

export default app