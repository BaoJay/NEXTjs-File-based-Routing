import classes from "./Button.module.css";

import Link from "next/link";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
