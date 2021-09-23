import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom'
import { FixedScrollFC, Keynote } from '../../src'

const App = () => {
  const cr = useRef()
  const [step, setStep] = useState(1)

  useEffect(() => {
    console.log('step', step)
    // const onScroll = () => {
    //   console.log('外部监听方案', cr.current.percentageTop)
    // }
    // window.addEventListener('scroll', onScroll)
    // return () => window.removeEventListener('scroll', onScroll)
  }, [step])

  // console.log('step', step)
  return (
    <div
      style={{ height: '100%' }}
      // onClick={() => console.log('基于事件查看方案', cr.current.percentageTop)}
    >
      {/* <FixedScrollFC
        ref={cr}
        height={10000}
        contents={[
          <section className=''>Step1</section>,
          <section className=''>Step2</section>,
          <section className=''>Step3</section>,
        ]}
      /> */}

      <Keynote
        contents={[
          <div className='full page1'>page1</div>,
          <div className='full page2'>page2</div>,
          <div className='full page3'>page3</div>,
        ]}
      />
    </div>
  )
}
render(<App />, document.getElementById('root'))
