import { makeStyles } from "@material-ui/core";

const useStyleLoader = makeStyles((theme) => ({
    loader: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      loader_text: {
        fontsize: "21",
        fontFamily: "'Source Sans Pro', sans-serif",
        color: "#65fafb;",
      },
      colorPrimary:{
        color: "#65fafb"
      }

}))

export default useStyleLoader;