import { Router } from 'express';
import { 
  getAllCardsController,
  getCardByIdController,
  createCardController,
  updateCardController,
  deleteCardController
} from './controllers';

const router = Router();

router.get('/', getAllCardsController)

router.get('/:id', getCardByIdController)

router.post('/', createCardController)

router.put('/:id', updateCardController)

router.delete('/:id', deleteCardController)

export default router;
