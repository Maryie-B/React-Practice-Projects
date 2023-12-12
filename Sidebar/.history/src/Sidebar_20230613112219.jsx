import logo from './logo.svg';
import {social, links} from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className='sidebar'>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
      </div>
    </aside>
  )
}

export default Sidebar
