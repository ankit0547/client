import React from "react";
import { Formik } from "formik";
import { Grid, makeStyles, Paper, TextField } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    border: "1px solid red",
    height: "calc(100vh - 3rem)",
  },
}));

function SignUp() {
  const classes = useStyle();
  return (
    <>
      <Grid container align="center" justify="center" className={classes.root}>
        <Grid
          item
          xs={3}
          container
          align="center"
          justify="center"
          alignContent="center"
        >
          <Paper>
            <form noValidate autoComplete="off">
              <Grid container xs={12} direction="coloumn">
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      ;
    </>
  );
}

export default SignUp;
