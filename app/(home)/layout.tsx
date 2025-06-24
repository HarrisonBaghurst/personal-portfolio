import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative'>
        {children}
    </main>
  )
}

export default layout