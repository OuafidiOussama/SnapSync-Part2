import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import Button from './atoms/Button';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { loginSchema, registerSchema } from '../validation/authValidator';
import { useFormik } from 'formik'
import { userLoginAction, userRegisterAction } from '../redux/actions/userAction';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton'
import { useHistory } from 'react-router-dom'


const Login = ({responseMessage, errorMessage, register}) => {
  const dispatch = useDispatch()
  let history = useHistory()
  const {loading, isAuthenticated} = useSelector(state =>state.login)

  useEffect(()=>{
    if(isAuthenticated){
      history.push('/')
    }
  },[isAuthenticated])

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions)=>{
      dispatch(userLoginAction(values))
      actions.resetForm()
    }
  })
  return (

    <form onSubmit={formik.handleSubmit}>
      <div className="w-96 mx-auto bg-white shadow-xl  px-3 py-5 rounded-lg border-[1px] border-gray-300">
        <div className="h-full w-full flex flex-col items-center gap-y-3">
            <Icon icon="material-symbols:lock" className="bg-red-700 text-white rounded-full w-10 h-10 p-1.5"/>
            <h1 className="text-2xl font-medium">Sign in</h1>

            <TextField 
              fullWidth
              label="Email"
              id="email"
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
             />
            <TextField 
              fullWidth
              label="Password"
              id="password"
              name='password'
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
             />

            {loading ? <LoadingButton loading variant="outlined" fullWidth>SIGN IN</LoadingButton> : <Button label="sign in" bg="bg-indigo-700" hover="hover:bg-indigo-900" type="submit" w="full mt-3"/>}
        </div>
        <div className="w-fit mt-7 cursor-pointer">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <p className="text-end text-sm uppercase mt-3">Don't have an account ? <span className="underline cursor-pointer" onClick={register}>SIGN UP</span></p>
      </div>
    </form>
             
    
  )
}

const Register = ({responseMessage, errorMessage, login})=>{
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions)=>{
      // alert(JSON.stringify(values, null, 5))
      dispatch(userRegisterAction(values))
      actions.resetForm()
    }
  })
  return(
    <form onSubmit={formik.handleSubmit}>
      <div className="w-[500px] mx-auto bg-white shadow-xl  px-3 py-5 rounded-lg border-[1px] border-gray-300">
        <div className="h-full w-full flex flex-col items-center gap-y-3">
            <Icon icon="material-symbols:lock" className="bg-red-700 text-white rounded-full w-10 h-10 p-1.5"/>
            <h1 className="text-2xl font-medium">Sign up</h1>
            <div className='flex gap-5 w-full '>
              <TextField 
                fullWidth
                label="First Name*"
                id="firstName"
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField 
                fullWidth
                label="Last Name*"
                id="lastName"
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </div>
            <TextField 
              fullWidth
              label="Email*"
              id="email"
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
             />
            <TextField 
              fullWidth
              label="Password*"
              id="password"
              name='password'
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
             />
            <TextField 
              fullWidth
              label="Confirm Password*"
              id="confirmPassword"
              name='confirmPassword'
              type='password'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
             />
            <Button label="sign up" bg="bg-indigo-700" hover="hover:bg-indigo-900" type="submit" w="full"/>
        </div>
        <div className="w-fit mt-7 cursor-pointer">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <p className="text-end text-sm uppercase mt-3">already have an account <span className="underline cursor-pointer" onClick={login}>SIGN IN</span></p>
      </div>
    </form>
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
