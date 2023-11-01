import { Outlet } from "react-router-dom";
import useStyles from "../styles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <div>NavBar</div>
      <div className={classes.toolbar} />
      <Outlet />
    </>
  );
};

export default NavBar;
