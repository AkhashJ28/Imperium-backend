import express from 'express'
import supabase from '../config/supabase.js'

const router = express.Router()

router.get('/leaderboard', async (req, res) => {
<<<<<<< HEAD
  try {
=======

  try {

>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823
    const { data, error } = await supabase
      .from('user_progress')
      .select(`
        score,
        rank,
        users (
          email
        )
      `)
      .order('score', { ascending: false })
<<<<<<< HEAD
      .limit(10)
=======
>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823

    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }

    return res.status(200).json(data)

  } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823
    return res.status(500).json({
      error: error.message
    })
  }
})

<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823
