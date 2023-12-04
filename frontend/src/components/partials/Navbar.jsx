import React from 'react'
import Button from '../atoms/Button'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogoutAction } from '../../redux/actions/userAction'
import LoadingButton from '@mui/lab/LoadingButton'
import { googleLogout } from '@react-oauth/google';

const Authorized = ({userInfo, googleUser, logout, logoutGoogle}) =>{
  return (
    <div className='flex h-20 w-96 py-5 items-center justify-around'>
      <span>{ (userInfo && userInfo.user.name) || googleUser.name}</span>
      { userInfo ? <Button label="logout" bg="bg-red-600" hover="hover:bg-red-800" handler={logout}/> : <Button label="logout" bg="bg-red-600" hover="hover:bg-red-800" handler={logoutGoogle}/> }
    </div>
  )
}

const NotAuthorized = ({loading}) =>{
  let history = useHistory()
  const auth = () =>{
    history.push('/auth')
  }
  return (
    <div onClick={auth}>
      {loading ? <LoadingButton loading variant="outlined" >SIGN IN</LoadingButton> : <Button label="sign in" bg="bg-indigo-700" hover="hover:bg-indigo-900"/>}
    </div>
  )
}

function Navbar() {
  const {userInfo, loading} = useSelector(state=> state.login)
  const googleUser = JSON.parse(localStorage.getItem('googleUser'))
  const dispatch = useDispatch()
  let history = useHistory()

  // useEffect(()=>{
  //   dispatch(userProfileAction())
  // }, [])

  const logoutGoogle = () =>{
    googleLogout()
    localStorage.removeItem('googleUser')
    localStorage.removeItem('googleToken')
    window.location.reload(true)
    setTimeout(()=>{
      history.push('/')
    }, 500)
  }

  const logout = () =>{
    dispatch(userLogoutAction())
    window.location.reload(true)
    setTimeout(()=>{
      history.push('/')
    }, 500)
  }
  const home = ()=>{
    history.push('/')
  }
  return (
    <div className="my-5 bg-white shadow-2xl py-3 h-20 rounded-2xl flex items-center justify-between px-16">
        <h1 className='text-center text-5xl text-blue-500 cursor-pointer' onClick={home}>SnapSync</h1>
        {userInfo || googleUser ? <Authorized userInfo={userInfo} logout={logout} googleUser={googleUser} logoutGoogle={logoutGoogle} /> : <NotAuthorized loading={loading} />}
    </div>
  )
}

export default Navbar
