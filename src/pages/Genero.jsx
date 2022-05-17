import { Typography, MenuItem, FormControl } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import axios from "../Api";
import requests from "../Api/Requests";
import { genero_accion } from "../utils/constant";
import Row from "../components/Row";
import Layout from "../containers/Layout";
import useStyleGenero from "../styles/components/StyleGenero";
import BannerBase from "../components/base/BannerBase";
const Genero = () => {
  const classes = useStyleGenero();
  const [generlist, setGenerlist] = useState([]);
  const [value, setValue] = useState(0);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      const request = await axios.get(requests.fetchGenders);
      setGenerlist(request.data.genres);
    };
    fetchGenres();
  }, [value]);



  const handleChange = (event) => {
    let id = event.target.value;

    if (event.target.value == 0) {
      id = genero_accion;
    }
    setValue(id);
  };

  return (
    <>
      <Layout>
        <div className={classes.contenedor}>
          <BannerBase/>
          <div className={classes.genero}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                MenuProps={MenuProps}
                id="demo-simple-select-autowidth"
                value={value}
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
                autoWidth
                onChange={handleChange}
              >
                {generlist.map((genero) => (
                  <MenuItem key={genero.id} value={genero.id}>
                    {genero.name}
                  </MenuItem>
                ))}
                <MenuItem value="0">Generos</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.root}>
            <Row
              id="1"
              titleMovie=""
              fetchUrl={requests.fetchActionMovies}
              with_genres={value}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

export default Genero;
Genero.displayName = "Row Movie Generos";
