import { Box, Typography } from "@mui/material"
import Image from "next/image"

import theme from '../theme'

const Logo = () => {
    return(
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            justifyContent: 'center'
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
    )
}

export default Logo