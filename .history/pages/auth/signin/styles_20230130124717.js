import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
  return {
    box:{
      alignSelf: 'center'
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: 'blue'
    },
    subtitle: {
      marginBottom: 20
    },
    box: {
      backgroundColor: theme.palette.box.default,
      padding: theme.spacing(3),
      borderRadius: 5,
    },
    formControl: {
      marginBottom: 20
    },
    loading: {
      display: 'block',
      margin: '10px auto'
    },
    textLink: {
      marginTop: 10
    },
    errorMessage: {
      margin: '20px 0'
    },
    separationLine:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
      margin: '10px 0'
    },
    line:{
    background: theme.palette.secondary.main,
    flexGrow: 1,
    height: 1,
    },
    lineText:{
      margin: '0 5px'
    },
  }
})

export default useStyles