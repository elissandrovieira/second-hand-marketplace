import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return {
      formControl:{
        marginBottom: 20
      },
      title:{
        marginBottom: 20
      },
      boxContainer: {
        paddingBottom: theme.spacing(3),
      },
      box: {
        backgroundColor: theme.palette.box.default,
        padding: theme.spacing(3),
      },
      thumbsConteiner: {
        backgroundColor: theme.palette.box.default,
        display: 'flex',
        flexWrap: 'wrap',
        padding: 15
      },
      dropzone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        margin: '0 15px 15px 0',
        width: 180,
        height: 135,
        backgroundColor: theme.palette.box.softDark,
        border: '2px dashed black',
        cursor: 'pointer',
      },
      thumb: {
        position: 'relative',
        width: 180,
        height: 135,
        margin: '0 15px 15px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
  
        '.mainImage': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette.primary.main,
          borderRadius: '0 10px 0 0',
          padding: '6px 10px',
  
        },
  
        '&:hover .mask': {
          display: 'flex',
        },
  
        '.mask': {
          display: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#000000b3',
          width: '100%',
          height: '100%',
        },
      }
    }
  })

export default useStyles