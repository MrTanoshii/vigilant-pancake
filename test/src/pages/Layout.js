import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Link to={"/"}>Back to Home</Link>
      <Link to={"/test"}>Back to Test</Link>
      <Link to={"/missing"}>Go to missing page</Link>
      <Outlet />
    </>
  );
};
