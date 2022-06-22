import React, { useState } from 'react'
import { render } from 'react-dom'
import { KeynoteFC, ParallaxFC } from '../../src'

const App = () => {
  // const cr = useRef()
  const [step, setStep] = useState(1)
  const [ratio, setRatio] = useState(0)

  let bg =
    'https://images.unsplash.com/photo-1640746122832-851abed18527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  return (
    <div>
      {/* 复杂版本 */}
      <KeynoteFC />

      {/* 简单版本 */}
      {/* <ParallaxFC
        onScroll={(e) => {
          setRatio(e.ratio)
        }}
        height={'80vh'}
        contentHeight={4000}
        // containerHeight={500}
        // background={`url(${bg})`}
        contents={[
          <div style={{ background: '#666', width: 400, height: 300 }}>1 - {ratio}</div>,
          <div style={{ background: '#777', width: 400, height: 300 }}>2 - {ratio}</div>,
          <div style={{ background: '#888', width: 400, height: 300 }}>3 - {ratio}</div>,
          <div style={{ background: '#999', width: 400, height: 300 }}>4 - {ratio}</div>,
        ]}
      /> */}
    </div>
  )
}
render(<App />, document.getElementById('root'))
