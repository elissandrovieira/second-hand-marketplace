import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return {
      container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      linkLogo:{
        
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
      loading:{
        display: 'block',
        margin: '10px auto'
      },
      textLink: {
        marginTop: 10
      },
      link:{
        textDecoration: 'none',
        color: 'blue'
      }
    }
  })

  export default useStyles