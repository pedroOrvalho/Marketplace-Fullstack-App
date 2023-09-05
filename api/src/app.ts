import Express from 'express'
import cors from 'cors'
import productRouter from './routers/products'
import userRouter from './routers/users'

const app=Express()

app.use(Express.json())
app.use(cors())



app.use("/product", productRouter)
app.use("/user", userRouter)






export default app