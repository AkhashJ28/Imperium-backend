import express from 'express'
import supabase from '../config/supabase.js'
<<<<<<< HEAD
import { requireAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/progress', requireAuth, async (req, res) => {
  try {

    const userId = req.user.id
=======

const router = express.Router()

router.get('/progress/:userId', async (req, res) => {
  try {

    const { userId } = req.params
>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823

    const { data, error } = await supabase
      .from('submissions')
      .select(`
        round_id,
        submitted_at,
        rounds (
          id,
          title,
          challenge_id,
          round_order
        )
      `)
      .eq('user_id', userId)

    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }

    return res.status(200).json({
      progress: data
    })

  } catch (error) {

    return res.status(500).json({
      error: error.message
    })
  }
})

export default router