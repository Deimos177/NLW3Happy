import { Router } from 'express'
import OrphanageController from './controllers/orphanagesController'
import multer from 'multer'
import uploadConfig from './config/upload'

const routes = Router()
const upload = multer(uploadConfig)

routes.post('/orphanages', OrphanageController.create)
routes.get('/orphanages', OrphanageController.index)
routes.get('/orphanages/:id', upload.array('images'), OrphanageController.show)

export default routes