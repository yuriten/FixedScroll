import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react'
import { scrollHook } from './tools'
import './style.css'

const KeynoteFC = (props, ref) => {
  // props:
  // contents 内容，[div, div, div]
  // step 当前走到第几步

  // const [percentageTop, setPercentageTop] = useState(0)

  // useImperativeHandle(ref, () => {
  //   return { percentageTop: percentageTop }
  // })

  useEffect(() => {
    let onScroll = (e) => scrollHook(e, props.start, props.end)
    window.addEventListener('wheel', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [props.step])

  return (
    <div className='FS-container'>
      <div className='FS-background-container'>keynote background</div>

      {/* 前景，相当于给一个 abslute */}
      <div className='FS-foreground-container'>
        {props.contents.map((con, index) => {
          let none = props.step !== index + 1 ? ' FS-none ' : ''
          return (
            <div key={index} className={'FS-foreground-item' + none}>
              {con}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default forwardRef(KeynoteFC)
