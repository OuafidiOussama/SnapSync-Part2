import React from 'react'
import { Icon } from '@iconify/react';
import Input from "../components/atoms/Input";
import Button from './atoms/Button';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { login } from '../redux/actions/users';
import { useDispatch } from 'react-redux';

const Login = ({responseMessage, errorMessage, register}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleLogin = async() =>{
    const res = await dispatch(login(formData))
    if(res.success == true){
      const token = res.token
      const user = res.user
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('jwtToken', token)
      window.location.href= '/'
    }else{
      console.error('Wrong email Or Password')
    }
  }
  return (
    <div className="w-96 mx-auto bg-white shadow-xl  px-3 py-5 rounded-lg border-[1px] border-gray-300">
        <div className="h-full w-full flex flex-col items-center gap-y-3">
            <Icon icon="material-symbols:lock" className="bg-red-700 text-white rounded-full w-10 h-10 p-1.5"/>
            <h1 className="text-2xl font-medium">Sign in</h1>
            <Input label="Email" name="email" handleChange={handleChange} />
            <Input label="Password" name="password" handleChange={handleChange} />
            <Button label="sign in" bg="bg-indigo-700" hover="hover:bg-indigo-900" type="submit" w="full mt-3" handler={handleLogin}/>
        </div>
        <div className="w-fit mt-7 cursor-pointer">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <p className="text-end text-sm uppercase mt-3">Don't have an account ? <span className="underline" onClick={register}>SIGN UP</span></p>
    </div>
  )
}

const Register = ({responseMessage, errorMessage, login})=>{
  return(
    <div className="w-[500px] mx-auto bg-white shadow-xl  px-3 py-5 rounded-lg border-[1px] border-gray-300">
        <div className="h-full w-full flex flex-col items-center gap-y-3">
            <Icon icon="material-symbols:lock" className="bg-red-700 text-white rounded-full w-10 h-10 p-1.5"/>
            <h1 className="text-2xl font-medium">Sign up</h1>
            <div className='flex gap-5 w-full '>
              <Input label="First Name*" name="firstName" />
              <Input label="Last Name*" name="lastName" />
            </div>
            <Input label="Email*" name="email"/>
            <Input label="Password*" name="password"/>
            <Input label="Confirm Password*" name="confirmPassword"/>
            <Button label="sign up" bg="bg-indigo-700" hover="hover:bg-indigo-900" type="submit" w="full"/>
        </div>
        <div className="w-fit mt-7 cursor-pointer">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <p className="text-end text-sm uppercase mt-3">already have an account <span className="underline" onClick={login}>SIGN IN</span></p>
    </div>
  )
}

export default function AuthForm() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
  };
  
  const register = ()=>{
    setPath('register')
  }
  const login = ()=>{
    setPath('login')
  }

  const [path, setPath] = useState('login')

  return path === 'login' ? (<Login responseMessage={responseMessage} errorMessage={errorMessage} register={register}  />) : (<Register responseMessage={responseMessage} errorMessage={errorMessage} login={login} />)

}
