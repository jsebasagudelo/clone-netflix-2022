import React from "react";
import { string} from "prop-types";
import useStylesError from "../styles/components/StyleError";
import { Grid, Typography } from "@material-ui/core";

const Error = ({ title, message }) => {
  const classes = useStylesError();

  return (
    <div className={classes.root}>
      <div className={classes.bg} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={4}
        className={classes.content}
      >
        
        <Grid item>
          <Typography variant="h4" color="secondary">
          {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.error}>
            {message}
          </Typography>
        </Grid>
      
      </Grid>
    </div>
  );
};

Error.propTypes = {  
  title: string.isRequired,
  message: string.isRequired,
};

export default Error;
