
import Sidebar from '../sidebar/Sidebar'
import Main from './Main'
import './layout.css'

export default function Layout (props){
   
      

    return(
        <div className='layout'>    
            <Sidebar />       
            <Main>
                {/* <div onClick={click}>click</div> */}
                {props.children}
            </Main> 
        </div>
    )    
}
