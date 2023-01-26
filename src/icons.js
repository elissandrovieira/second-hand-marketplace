import { useState } from 'react'
import { SvgIcon, IconButton } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from './theme'

const useStyles = makeStyles()((theme) => {
  return {
    IconButton: {
      position: 'relative',
      width: 40,
      height: 40,
      padding: 20
    },

    favIconHide: {
      display: 'none',
      position: 'absolute',

    },
    favIcon: {
      position: 'absolute',
    }

  }
})

export function DeleteIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512">
        <path d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Zm-170.67-21.33c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Zm85.33,0c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
      </svg>
    </SvgIcon>
  )
}

export function SearchIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
        <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" /></svg>
    </SvgIcon>
  )
}

export function FavoriteIconFilled(props) {
  return (
    <SvgIcon {...props}>
      <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.21 450.05">
        <path d="M373.44,0c-48.9,.76-93.65,27.61-117.33,70.4C232.42,27.61,187.67,.76,138.77,0,59.05,3.46-2.9,70.66,.11,150.4,.11,247.4,102.21,353.34,187.84,425.17c39.47,33.17,97.06,33.17,136.53,0,85.63-71.83,187.73-177.77,187.73-274.77C515.11,70.66,453.16,3.46,373.44,0Z" />
      </svg>
    </SvgIcon>
  )
}

export function FavoriteIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
      </svg>
    </SvgIcon>
  )
}

export function FavoriteIconButton() {
  const { classes } = useStyles()

  const [changeIcon, setChangeIcon] = useState({
    fav: classes.favIcon,
    fill: classes.favIconHide
  })

  const handleChangeIcon = () => {
    changeIcon.fav === classes.favIcon
      ? setChangeIcon({
        fav: classes.favIconHide,
        fill: classes.favIcon
      })
      : setChangeIcon({
        fav: classes.favIcon,
        fill: classes.favIconHide
      })
  }

  return (
    <IconButton className={classes.IconButton}>
      <FavoriteIcon className={classes.favIcon} onClick={() => handleChangeIcon()} />
      <FavoriteIconFilled
        className={changeIcon.fill}
        onClick={() => handleChangeIcon()}
        sx={{
          color: theme.palette.tertiary.main
        }}
      />
    </IconButton>
  )
}

export function LocationIconFilled(props) {
  return (
    <SvgIcon {...props}>
      <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.01 512.02">
        <path d="M214.53,0C96.06-.01,.01,96.02,0,214.49c0,54.14,41.24,138.45,122.54,250.6,21.24,29.63,55.52,47.12,91.97,46.93,36.45,.19,70.73-17.31,91.97-46.93,81.3-112.15,122.54-196.46,122.54-250.6C429,96.03,332.98,.01,214.53,0Zm-.02,298.69c-47.13,0-85.33-38.21-85.33-85.33s38.21-85.33,85.33-85.33,85.33,38.21,85.33,85.33-38.21,85.33-85.33,85.33Z" />
      </svg>
    </SvgIcon>
  )
}