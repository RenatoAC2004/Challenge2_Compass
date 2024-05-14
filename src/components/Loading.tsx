import { SpinnerGap } from 'phosphor-react'

interface LoadingProps {
  size: number;
}

export const Loading = ({size} : LoadingProps ) => {
  return (
      <SpinnerGap className='animate-spin self-center' size={size}/>
  )
}