import { useState } from 'react'
import { useSession, signOut } from 'next-auth/client'
import Link from 'next/link'
import Image from "next/image"
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
  const [ session ] = useSession()

  const openUseMenu = Boolean(anchorUseMenu)

  return (
    <Box>
      <AppBar position="static" elevation="0" sx={{
        background: theme.palette.primary,
        borderBottom: '1px solid #F3F3F3'
      }}>
        <Container maxWidth="lg">
          <Toolbar sx={{
            display:'flex',
            justifyContent: 'space-between'
          }}>
            <Link href="/" passHref legacyBehavior>
              <Box sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
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
                    margin: 0,
                    color: theme.palette.secondary.main
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
            <Box>
              <Link href={session ? '/user/publish' : '/auth/signin'} passHref legacyBehavior>
                <Button color="inherit" variant='outlined'>
                  Post & Sell
                </Button>
              </Link>
              {
                session
                ? (
                    <>
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
                          session.user.image
                            ? <Avatar
                            src={session.user.image}
                            sx={{width:30, height:30}}
                            />
                            : <AccountCircle
                              sx={{
                                color: theme.palette.secondary.main,
                                width:30,
                                height:30
                                }}
                              />
                        }
                        <Typography variant="subtitle2" sx={{
                          marginLeft: 1,
                          color: theme.palette.secondary.main
                        }} >
                          {session.user.name}
                        </Typography>
                      </IconButton>
                    </>
                ) : null
              }
            </Box>

            <Menu
              fullWidth
              elevation={0}
              anchorEl={anchorUseMenu}
              open={openUseMenu}
              onClose={() => setAnchorUseMenu(null)}
              sx={{
                marginTop: 2,
              }}
            >
              <Link href="/user/dashboard" passHref legacyBehavior>
                <MenuItem className=''}>My Ads</MenuItem>
              </Link>
              <Link href="/user/publish" passHref legacyBehavior>
                <MenuItem>Post new ads</MenuItem>
              </Link>
              <Divider sx={{
                margin: '8px 0'
              }} />
              <MenuItem onClick={() => signOut({
                callbackUrl: '/'
              })}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
