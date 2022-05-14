import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyleLoader from  '../styles/components/StyleLoader'
const Loader = () => {
  const classes = useStyleLoader();
  return (
    <div className={classes.loader}>
      <CircularProgress classes={{colorPrimary: classes.colorPrimary}} />
      <span className={classes.loader_text}>Loading...</span>
    </div>
  );
};



export default Loader;
