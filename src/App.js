import React from 'react';
import {
  Paper,
  Grid,
  Button,
  MenuItem,
  TextField,
  Select
} from '@material-ui/core';

const onSubmit = async values => {
  const errors = await validate(values);
  if (!Object.keys(errors).length) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

function App() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <form onSubmit={onSubmit} noValidate>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="firstName"
                type="text"
                label="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                name="lastName"
                type="text"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                fullWidth
                required
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                name="city"
                label="Select a City"
                placeholder="Select a City"
                formControlProps={{ fullWidth: true }}
              >
                <MenuItem value="London">London</MenuItem>
                <MenuItem value="Paris">Paris</MenuItem>
                <MenuItem value="Budapest">
                  A city with a very long Name
                </MenuItem>
              </Select>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                type="button"
                variant="contained"
              >
                Reset
              </Button>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default App;
