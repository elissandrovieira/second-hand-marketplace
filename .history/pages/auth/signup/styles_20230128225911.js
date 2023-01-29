import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return {
      container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      subtitle:{
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
      
  })

  export default useStyles