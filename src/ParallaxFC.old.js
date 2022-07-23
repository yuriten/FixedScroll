import React, { useState } from 'react'
import './style.css'

// 滚动视差效果
// 这个现在顶多只能还原麦金獭 https://sspai.com/page/retro
const ParallaxFC = (props) => {
  let {
    height, // 通常是一个很小的数字。这个属性会强制覆盖掉 css 设置的高度。
    contentHeight, // 通常是一个很大的数字 内容高度，也就是可滚动高度
    contents, // contents 内容，[div, div, div]
    backgroundStyle,
    backgroundClassName,
  } = props

  const [step, setStep] = useState(1)
  let containerH = height ? height : 300
  return (
    <div
      className='FS-bg'
      style={{ height: containerH, overflowY: 'auto' }}
      onScroll={(e) => {
        let rect = e.target.getBoundingClientRect()
        let distance = e.target.scrollTop
        let ratio = distance / (contentHeight - rect.height)
        ratio = Math.min(ratio, 1)
        let yiff = 1 / contents.length // 一份
        let ff = Math.ceil(ratio / yiff) // 向上取整
        let nextStep = ff === 0 ? 1 : ff

        setStep(nextStep) // 但 0 就视为 1
        props.onScroll?.({
          ratio: ratio, // 0-1
          distance: distance,
          step: nextStep,
        })
      }}
    >
      <div className='FS-fg' style={{ height: contentHeight, background: 'pink' }}>
        <div className='FS-sticky' style={{ position: 'sticky', top: 0 }}>
          {contents.map((con, index) => {
            let none = step !== index + 1 ? ' FS-none ' : ''

            return (
              <div key={index} className={'FS-foreground-item' + none}>
                {con}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ParallaxFC
