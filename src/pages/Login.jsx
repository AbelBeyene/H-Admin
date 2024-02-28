/* eslint-disable no-cond-assign */
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
function Login() {
  const [email,setEmail]= useState('');
  const [password,setPassword]=useState('');
  const history = useNavigate();

    const emailHandler=(e)=>{
      setEmail(e.target.value);
      console.log(email);
    }

    const passwordHandler=(e)=>{
      setPassword(e.target.value)
      console.log(password);
    }

    // async function onSubmitHandler(e){
    //   e.preventDefault();
    //   try {
      
    //     await axios.post("http://localhost:8000/",{
    //       email,password
    //     }).then(res=>{
    //       if(res.data==='exist'){ //      <--------------------------------------------i am using this word "exist"
    //         history("/dashboard")
    //       }
    //     })
        
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }
  return (
    <form action="POST" className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-600 text-3xl">
            {" "}
            Hulum Admin
          </p>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Login
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
          onChange={emailHandler}
          value={email}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          value={password}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <Link to={"/dashboard"}>
            {" "}
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              // onClick={onSubmitHandler}
            >
              Login
            </button>
          </Link>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left"></div>
      </div>
    </form>
  );
}

export default Login;
