import { IconButton, InputBase, Paper } from '@mui/material'
import { SearchIcon } from '../icons'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
  return {
    searchBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      marginTop: 20,
      backgroundColor: theme.palette.background.white,
    },
    searchIcon: {
      color: theme.palette.secondary.main,
      width: 20,
      marginRight: 10,
    },
  }
})


const SearchBox = ({ placeholder }) => {
  const { classes } = useStyles()

  return (
    <Paper className={classes.searchBox} elevation="0">
      <IconButton>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
      <InputBase
        placeholder={placeholder}
        fullWidth
      />
    </Paper>
  )
}

export default SearchBox