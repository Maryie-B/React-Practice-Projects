import { Link, Outlet } from 'react-router-dom';
const HomeLayout = () => {
  return (
    <div>
      {/* <h1>HomeLayout</h1>
      <Link to='/about'>About Page</Link> */}
      <Outlet />
    </div>
  );
};
export default HomeLayout;