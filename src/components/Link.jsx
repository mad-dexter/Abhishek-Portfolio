import { NavLink, useNavigate } from "react-router-dom";

function Link({ to, children, className }) {
  const navigation = useNavigate();
  if (to === -1) {
    return (
      <NavLink
        onClick={() => navigation(-1)}
        className={`hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400 ${className}`}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <NavLink
      to={to}
      className={`hover:text-sky-500 hover:underline hover:underline-offset-4 dark:hover:text-sky-400 ${className}`}
    >
      {children}
    </NavLink>
  );
}

export default Link;
