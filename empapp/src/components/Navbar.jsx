import React from 'react'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography>Employe</Typography>&nbsp;
                  <Link to='/add'>
                      <Button variant="contained">ADD</Button>
                  </Link>
                  &nbsp;
                  <Link to='/sup'>
                      <Button variant="contained">Sign up</Button>
                  </Link>
                  &nbsp;
                  
              </Toolbar>
          </AppBar><br />
    </div>
  )
}

export default Navbar
