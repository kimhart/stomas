import { Link, useLocation } from "react-router-dom";
import css from "./style.module.scss";

export default function TopNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
      <div className={css.topNav}>
        <Link to="/">Home</Link>
        <Link className={`${path === '/profile' ? css.active : ''}`} to="/profile">
          {/* <img src={process.env.PUBLIC_URL + '/images/some-image.png'} /> */}
        </Link>
      </div>
  );
}
