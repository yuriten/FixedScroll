import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react'
import './style.css'

const getTopPer = (dom, height) => {
  // let distance = dom.scrollTop;
  let containerCut = height - dom.clientHeight // 窗口长度
  // console.log('e', e)

  // 声明 DTD：
  let p = dom.scrollTop / containerCut
  // 未声明 DTD：
  // let p = document.body.scrollTop / containerCut
  if (p >= 1) {
    p = 1
  }
  return p
}

const FixedScroll = forwardRef((props, ref) => {
  let {
    height, // height 高度（只在 mode=distance时生效）
    contents, // contents 内容，[div, div, div]
    scrollHeight,
    containerHeight,
    background,
  } = props

  const [step, setStep] = useState(1)
  const [percentageTop, setPercentageTop] = useState(0)
  const [topDistance, setTopDistance] = useState(0)

  // 主要作用：
  // 1，传入一个固定高度和分片数量
  // 2，自动切分出多个滚动组件
  // 3，暴露一组属性、方法让外部可获取内部 Value

  useImperativeHandle(ref, () => {
    return {
      step: step,
      percentageTop: percentageTop, //距离顶部百分比
      topDistance: topDistance, // 距离顶部距离
    }
  })

  useEffect(() => {
    const onScroll = (e) => {
      let dom = e.target.documentElement
      let p = getTopPer(dom, height)
      let yiff = 1 / contents.length // 一份
      let ff = Math.ceil(p / yiff) // 向上取整
      setStep(ff === 0 ? 1 : ff) // 但 0 就视为 1
      setPercentageTop(p)
      setTopDistance(dom.scrollTop)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [step])

  let containerH = containerHeight ? containerHeight : '100vh'
  return (
    <div
      className='FS-bg'
      onScrollCapture={(e) => {
        let top = e.target.scrollTop
        let p = top / scrollHeight
        if (p >= 1) {
          p = 1
        }
        let yiff = 1 / contents.length // 一份
        let ff = Math.ceil(p / yiff) // 向上取整
        setStep(ff === 0 ? 1 : ff) // 但 0 就视为 1
        setPercentageTop(p)
        setTopDistance(top)
      }}
      style={{ height: containerH, overflowY: 'auto' }}
    >
      <div className='FS-fg' style={{ height: scrollHeight, background: background }}>
        <div className='FS-abs' style={{ position: 'absolute' }}>
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
})

export default FixedScroll
