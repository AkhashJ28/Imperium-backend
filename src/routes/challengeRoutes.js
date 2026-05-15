import express from 'express'
<<<<<<< HEAD
import { requireAuth } from '../middleware/auth.js'
=======
>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823
import supabase from '../config/supabase.js'

const router = express.Router()

<<<<<<< HEAD
router.get('/challenges', requireAuth, async (req, res) => {
=======
router.get('/challenges', async (req, res) => {
>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823

  try {

    const { data, error } = await supabase
      .from('challenges')
      .select('*')
      .order('challenge_order')

    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }

    return res.status(200).json(data)

  } catch (error) {

    return res.status(500).json({
      error: error.message
    })
  }
})

export default router