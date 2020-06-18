import express, { request, response } from 'express';
import { celebrate, Joi} from 'celebrate';

import multer from  'multer';
import multerConfig from './config/multer';


import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index); 


routes.get('/points', pointsController.index);//o index é usado sempre que vou listar varios elementos
routes.get('/points/:id', pointsController.show);


routes.post(
    '/points',
    upload.single('image'),
    //validação de campos do cadastro
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required(),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false,
    }),
    pointsController.create
);

export default routes;