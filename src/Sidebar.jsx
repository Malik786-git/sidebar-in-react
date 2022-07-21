import React, { useContext } from 'react'
import MyContext from './context';

const Sidebar = () => {

   
  const {isSidebarOpen, closeSidebar} = useContext(MyContext);
  console.log(closeSidebar);


  return (
    <div className={isSidebarOpen ? 'sidebar show-sidebar': 'sidebar'}>
           <button onClick={closeSidebar}>X</button>
           <br />
          <h1>Jaffery Coder</h1>
          
    </div>
  )
}

export default Sidebar;
