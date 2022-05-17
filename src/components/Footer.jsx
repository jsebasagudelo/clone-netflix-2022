import React from "react";
import useStyleFooter from "../styles/components/StyleFooter";
import propTypes from "prop-types";
const Footer = ({autor}) => {
  const classes = useStyleFooter();
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        &copy; 2022 Made with ❤️ by {"  "}
        <a className={classes.link__container} href="https://github.com/jsebasagudelo/netflix-clone">
          {"   "}
          {autor}
        </a>
      </div>
    </footer>
  );
};

// Component Documentation
Footer.propTypes = {
  autor: propTypes.string,

};

export default Footer;
