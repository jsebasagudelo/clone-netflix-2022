import React from  'react'
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";
import propTypes from "prop-types";
const SearchedResults = ({ movies }) => {
   
  const styles={
    main:{
      marginBottom: "60px"
    },
    grid:{
      background:"#111",padding:"20px"
    }
  }

  return (
    <Grid container style={styles.grid}>
      {movies.map((d, idx) => (
        <Grid
          item
          key={idx}
          xs={6}
          sm={4}
          md={3}
          lg={2}
          style={styles.main}        >
           <MovieCard movie={d} />
        </Grid>
      ))}
    </Grid>
  );
};

// Component Documentation
SearchedResults.propTypes = {
  movies: propTypes.array,

};

export default SearchedResults;