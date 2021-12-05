import { Link } from "react-router-dom";
import css from "./style.module.scss";

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <h1>404</h1>
      <p>Sorry, that page doesn't exist. Go <Link to="/">home</Link>.</p>
    </div>
  );
}