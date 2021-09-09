import React, { useEffect, useRef } from 'react'
import { render } from 'react-dom'
import { FixedScrollFC } from '../../src'

const App = () => {
  const cr = useRef()

  // useEffect(() => {
  //   const onScroll = () => {
  //     console.log('外部监听方案', cr.current.percentageTop)
  //   }
  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [])

  return (
    <div
      style={{ height: '100%' }}
      // onClick={() => console.log('基于事件查看方案', cr.current.percentageTop)}
    >
      <FixedScrollFC
        ref={cr}
        height={10000}
        contents={[
          <h1 className=''>Step1</h1>,
          <h1 className=''>Step2</h1>,
          <h1 className=''>Step3</h1>,
        ]}
      />
    </div>
  )
}
render(<App />, document.getElementById('root'))
