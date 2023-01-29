import {
    Snackbar,
    Alert
} from '@mui/material'

const Toasty = ({ open, text, severity, onClose=null}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
    }
}