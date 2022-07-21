import React, {useContext} from 'react'
import MyContext from './context'

const Home = () => {
 
  const {openSidebar} = useContext(MyContext);  

  return (
    <main className='Home'>
      <div className="menu">
          <button onClick={openSidebar} className='sidebar-toggle'>
               Menu 
          </button>
        
      </div>
      <div className="home-content">
           <button className='btn'>
            Show Model
           </button>
      </div>
      
    </main>
  )
}

export default Home;
