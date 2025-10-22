import { Router } from 'express';
import { 
  getAllCardsController,
  getCardByIdController,
  createCardController,
  updateCardController,
  deleteCardController
} from './controllers';

const router = Router();

router.get('/card', getAllCardsController)

router.get('/card/:id', getCardByIdController)

router.post('/card', createCardController)

router.put('/card/:id', updateCardController)

router.delete('/card/:id', deleteCardController)

router.get('/teste', (_, res) => res.json({message: 'Teste de rota API'}));

export default router;
