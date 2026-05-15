import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({
  storage,

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

})

export default upload