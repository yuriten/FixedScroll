import React, { useRef, useState, useEffect } from 'react'
import ParallaxFC from './ParallaxFC'
import './style.css'

const getDistanceOfWindow = (e) => {
  let dom = e.target.documentElement
  let { height } = dom.getBoundingClientRect()
  let containerCut = height - dom.clientHeight // 窗口长度
  // 声明 DTD：
  let ratio = dom.scrollTop / containerCut
  // 未声明 DTD：
  // let p = document.body.scrollTop / containerCut
  if (ratio >= 1) {
    ratio = 1
  }
  return { ratio, distance: dom.scrollTop }
}

const KeynoteArticle = (props) => {
  let { distance, ratio, height, top } = props
  let articleRef = useRef(null)
  let art = articleRef.current
  let selfRatio = (distance - art?.offsetTop) / art?.offsetHeight || 0

  return (
    <div
      ref={articleRef}
      className='keynote-finishes'
      style={{
        background: '#ff5f5f',
        height: height,
        // overflow: 'unset',
      }}
    >
      <div
        className='keynote-item'
        style={{
          top: top,
          background: '#ff6f6f',
          position: 'sticky',
          overflow: 'hidden',
          height: 500,
        }}
      >
        <p>{selfRatio}</p>
      </div>
    </div>
  )
}

// 还原苹果官网的效果 https://www.apple.com.cn/macbook-air-m2/
// 原理是一个超长容器，内部接受几个【章节】，有的章节本身用的 ParallaxFC，有的章节用的是一个 div
const KeynoteFC = (props) => {
  let {
    height, // 通常是一个很小的数字。这个属性会强制覆盖掉 css 设置的高度。
    contentHeight, // 通常是一个很大的数字 内容高度，也就是可滚动高度
    contents, // contents 内容，[div, div, div]
  } = props

  const [step, setStep] = useState(1)
  const [distance, setDistance] = useState(0)
  // const [ratio, setRatio] = useState(0)

  useEffect(() => {
    const onScroll = (e) => {
      let { ratio, distance } = getDistanceOfWindow(e)
      // console.log('ratio', distance)
      // setRatio(ratio)
      setDistance(Math.floor(distance))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [step])

  return (
    <div>
      <KeynoteArticle top='100px' height='500vh' distance={distance} />
      <div className='' style={{ height: 200, background: 'gray' }}>
        Spacer
      </div>
      <KeynoteArticle top='100px' height='400vh' distance={distance} />
      <div className='' style={{ height: 1000, background: 'gray' }}>
        Spacer
      </div>
    </div>
  )
}

export default KeynoteFC
