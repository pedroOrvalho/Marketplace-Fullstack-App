import Express from 'express'
import passport from "passport"
import { googleStrategy, jwtStrategy } from './config/passport'
import cors from 'cors'

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

export default app