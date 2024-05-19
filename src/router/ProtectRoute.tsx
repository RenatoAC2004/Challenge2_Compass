import { useAuth } from '@clerk/clerk-react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Loading } from '../components/Loading'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'

export const ProtectRoute = () => {
  
  const { isLoaded, isSignedIn } = useAuth()
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth' 
  
  if (!isLoaded) {
    return (
      <div className='w-full h-screen justify-center relative'>
        {!isAuthPage && <Navbar /> }
        <div className='w-full flex justify-center items-center py-[20rem]'>
        <Loading size={34} />
        </div>
        {!isAuthPage && <Footer /> } 
      </div>
    )
  }
  
  if(!isSignedIn) {
    return (
        <Navigate to='/auth' />
    )
  }

  return <Outlet />
}
