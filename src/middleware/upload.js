import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({
  storage,
<<<<<<< HEAD

  fileFilter: (req, file, cb) => {

    // CSV files
    const csvTypes = [
      'text/csv',
      'application/vnd.ms-excel'
    ]

    // Jupyter notebook files
    const notebookTypes = [
      'application/x-ipynb+json',
      'application/json'
    ]

    // CSV validation
    if (csvTypes.includes(file.mimetype)) {

      req.fileValidation = {
        type: 'csv',
        maxSize: 100 * 1024 // 100KB
      }

      return cb(null, true)
    }

    // IPYNB validation
    if (
      file.originalname.endsWith('.ipynb') ||
      notebookTypes.includes(file.mimetype)
    ) {

      req.fileValidation = {
        type: 'ipynb',
        maxSize: 2 * 1024 * 1024 // 2MB
      }

      return cb(null, true)
    }

    return cb(
      new Error(
        'Only CSV and Jupyter Notebook (.ipynb) files are allowed'
      )
    )
  }

=======
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv') {
      cb(null, true)
    } else {
      cb(new Error('Only CSV files are allowed'))
    }
  }
>>>>>>> 621f93e447eb108b74b886289ce0ce031ce2e823
})

export default upload