const express = require('express');
const {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan
} = require('../../controllers/admin/planController');

const router = express.Router();

// Add admin authentication middleware where needed
router.post('/', createPlan);       // Admin: add plan
router.get('/', getPlans);          // All: view all plans
router.get('/:id', getPlanById);    // All: view single plan
router.put('/:id', updatePlan);     // Admin: edit plan
router.delete('/:id', deletePlan);  // Admin: delete plan

module.exports = router;
