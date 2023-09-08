import Express from 'express'
import passport from "passport"
import cors from 'cors'

import { googleStrategy, jwtStrategy } from './config/passport'
import apiErrorHandlers from './middleware/apiErrorHandlers'

import productRouter from './routers/products'
import userRouter from './routers/users'

const app=Express()

app.use(Express.json())
app.use(cors())
app.use(passport.initialize())
passport.use(jwtStrategy)
passport.use(googleStrategy);

app.use("/product", productRouter)
app.use("/user", userRouter)

app.use(apiErrorHandlers)

export default app