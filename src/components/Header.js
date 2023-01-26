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

export default function Header() {
  const [anchorUseMenu, setAnchorUseMenu] = useState(false)
  const openUseMenu = Boolean(anchorUseMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation="0" sx={{
        background: 'white',
        borderBottom: '1px solid #F3F3F3'
      }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" passHref legacyBehavior>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                cursor: 'pointer'
                }}>
              <Image
              src="/icon.svg"
              alt="icon"
              width={46}
              height={30}
              style={{
                marginRight: 10
              }}
              />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}>
                  <Typography component="body2" variant="h5" 
                  sx={{
                  fontWeight: 'bold',
                  padding: 0,
                  margin: 0
                  }}>
                      Second-Hand
                  </Typography>
                  <Typography component="body2" variant="body2" sx={{
                    padding: 0,
                    marginTop: '-8px',
                    letterSpacing: 5.3
                  }}>
                      MARKETPLACE
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Link href="/user/publish" passHref legacyBehavior>
              <Button color="inherit" variant='outlined'>
                Post & Sell
              </Button>
            </Link>
            <IconButton
            onClick={(e) => setAnchorUseMenu(e.currentTarget)} 
            sx={{
              marginLeft: 3,
              borderRadius: 2
            }}>
              {
                true === false
                ? <Avatar src="" />
                : <AccountCircle />
              }
              <Typography variant="subtitle2" sx={{ marginLeft: 1 }} >
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
