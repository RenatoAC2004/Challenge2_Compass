import { useAuth } from '@clerk/clerk-react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Loading } from '../components/Loading'

export const ProtectRoute = () => {
  
  const { isLoaded, isSignedIn } = useAuth()
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth' 
  
  if (!isLoaded) {
    return (
      <div className='w-full h-screen flex justify-center'>
        {!isAuthPage && null /*header*/ }
        <Loading size={34} />
        {!isAuthPage && null /*footer*/ }
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
