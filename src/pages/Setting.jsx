import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
const Setting = () => {
  
  return (
   <NavBar>
    <div>
        <h1 className='mx-auto text-center pb-10 text-2xl font-semibold text-blue-900'>Settings</h1>
        <div className='flex flex-row '>
        <Link to={"/languageSetting"}>
            <a href="" className='p-5 bg-blue-600 rounded-xl text-white ml-4'  >
                
                <span>Languages</span>
            </a>
            </Link>
            
        </div>
    </div>
   </NavBar>
  );
};

export default Setting;
