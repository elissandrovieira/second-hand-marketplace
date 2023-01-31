import { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'

import { DeleteIcon } from '../../icons'
import useStyles from './styles'

const FileUpload = ({ setFieldValue, values, errors, touched }) => {
  const { classes } = useStyles()

  const [imageKey, setImageKey] = useState(0)
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
          key: imageKey
        })
      })

      setImageKey(imageKey + 1)

      setFieldValue('files', [
        ...values,
        ...newFiles
      ])

    }
  })

  const handleRemoveFile = fileKey => {
    const newFilestate = values.filter(file => file.key !== fileName)
    setFieldValue('files', newFilestate)
  }

  return (
    <>
      <Box className={classes.box}>
        <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
          Images
        </Typography>
        <Typography component="div" variant="body2" color={errors && touched ? 'error' : 'textPrimary'} gutterBottom>
          The first image is the main of your ad.
        </Typography>
      </Box>
      <Box className={classes.thumbsConteiner}>
        <Box className={classes.dropzone} {...getRootProps()} sx={{
          border: `2px dashed ${ errors && touched ? '#d35656' : 'black'}`
        }} >
          <input name="files" {...getInputProps()} />
          <Typography variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
            Click here to add a image, or drag and drop a image here.
          </Typography>
        </Box>

        {values.map((file, index) => {
          return (
            <Box
              key={file.key}
              className={classes.thumb}
              sx={{ backgroundImage: `url(${file.preview})`, }}
            >
              {
                index === 0 ?
                  <Box className="mainImage">
                    <Typography variant='body2'>
                      Main
                    </Typography>
                  </Box>
                  : null
              }
              <Box className="mask">
                <IconButton color="primary" onClick={() => handleRemoveFile(file.name)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          )
        })}


      </Box>
      <Box className={classes.thumbsConteiner}>
        {
          errors && touched
            ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
            : null
        }
      </Box>
    </>
  )
}

export default FileUpload