import { Button, TextField } from '@mui/material'
import React from 'react'

const Addemp = () => {
  return (
    <div>
          <h1>New Employees</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" /><br />
          <TextField id="outlined-basic" label="Age" variant="outlined" /><br />
          <TextField id="outlined-basic" label="Department" variant="outlined" /><br />
          <TextField id="outlined-basic" label="Salary" variant="outlined" /><br />
          <Button variant="Contained">Add</Button>
    </div>
  )
}

export default Addemp
