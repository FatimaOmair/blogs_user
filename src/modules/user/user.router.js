import { Router } from "express";
import * as UserController from './user.controller.js'
const router=Router();

router.get('/',UserController.getUser)
router.delete('/:id',UserController.destroy);
router.put('/:id',UserController.update)

export default router;