import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom'
import { FixedScrollFC } from '../../src'

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

  let bg =
    'https://images.unsplash.com/photo-1640746122832-851abed18527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  return (
    <div>
      <FixedScrollFC
        scrollHeight={4000}
        // containerHeight={500}
        // background={`url(${bg})`}
        contents={[
          <div style={{ background: '#333', width: 400, height: 300 }}>1</div>,
          <div style={{ background: '#666', width: 400, height: 300 }}>2</div>,
          <div style={{ background: '#999', width: 400, height: 300 }}>3</div>,
          <div style={{ background: '#ddd', width: 400, height: 300 }}>4</div>,
        ]}
      />
    </div>
  )
}
render(<App />, document.getElementById('root'))
