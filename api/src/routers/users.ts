import Router from 'express'
import { createAllUsers } from '../controllers/users'

const router=Router()

router.post("/", createAllUsers)

export default router