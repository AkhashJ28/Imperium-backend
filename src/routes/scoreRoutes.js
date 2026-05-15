import express from 'express'
import supabase from '../config/supabase.js'

const router = express.Router()

router.get('/scores/:userId', async (req, res) => {

  try {

    const { userId } = req.params

    const { data, error } = await supabase
      .from('submission_scores')
      .select('*')
      .eq('user_id', userId)

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