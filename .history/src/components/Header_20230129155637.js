import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider
} from '@mui/material'

import theme from '../theme'
import { FavoriteIcon } from '../icons'

export default function Header() {
  const [anchorUseMenu, setAnchorUseMenu] = useState(false)
  const openUseMenu = Boolean(anchorUseMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation="0" sx={{
        background: theme.palette.primary,
        borderBottom: '1px solid #F3F3F3'
      }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" passHref legacyBehavior>
              
            </Link>
            <Link href="/user/publish" passHref legacyBehavior>
              <Button color="inherit" variant='outlined'>
                Post & Sell
              </Button>
            </Link>
            <IconButton sx={{
                marginLeft: 3,
              }}>
              <FavoriteIcon sx={{
                color: theme.palette.secondary.main
              }} />
            </IconButton>
            <IconButton
              onClick={(e) => setAnchorUseMenu(e.currentTarget)} sx={{borderRadius: 2}}>
              {
                true === false
                  ? <Avatar src="" />
                  : <AccountCircle sx={{color: theme.palette.secondary.main}} />
              }
              <Typography variant="subtitle2" sx={{
                marginLeft: 1,
                color: theme.palette.secondary.main
              }} >
                Elissandro Junior
              </Typography>
            </IconButton>

            <Menu
              elevation={0}
              anchorEl={anchorUseMenu}
              open={openUseMenu}
              onClose={() => setAnchorUseMenu(null)}
            >
              <Link href="/user/dashboard" passHref legacyBehavior>
                <MenuItem>My Ads</MenuItem>
              </Link>
              <Link href="/user/publish" passHref legacyBehavior>
                <MenuItem>Post new ads</MenuItem>
              </Link>
              <Divider sx={{
                margin: '8px 0'
              }} />
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
