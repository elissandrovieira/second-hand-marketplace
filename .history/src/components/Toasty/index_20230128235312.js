import {
    Snackbar,
    Alert as MuiAlert
} from '@mui/material'

const Toasty = ({ open, text, severity, onClose=null}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        if(onClose) onClose()
    }

    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <MuiAlert elevation={5} variant="filled" severity=''
        </Snackbar>
    )
}