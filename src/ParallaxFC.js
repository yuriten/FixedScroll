import React, { useRef, useState, useEffect } from 'react'
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

// 粘连的部分
const StickySection = (props) => {
  let { distance, scrollRange, top, onScroll } = props
  let articleRef = useRef(null)
  let art = articleRef.current
  let selfRatio = (distance - art?.offsetTop) / art?.offsetHeight || 0

  useEffect(() => {
    if (onScroll) {
      onScroll(selfRatio)
    }
  }, [selfRatio])
  return (
    <div
      ref={articleRef}
      style={{
        height: scrollRange,
      }}
    >
      <div
        style={{
          top: top ? top : 0,
          position: 'sticky',
          overflow: 'hidden',
        }}
      >
        {props.render(selfRatio)}
      </div>
    </div>
  )
}

// 还原苹果官网的效果 https://www.apple.com.cn/macbook-air-m2/
// 原理是一个超长容器，内部接受几个【章节】，有的章节本身用的 ParallaxFC，有的章节用的是一个 div
const Container = (props) => {
  const [distance, setDistance] = useState(0) // 整体距离(基于 container)
  const [percentage, setPercentage] = useState(0) // 整体百分比(基于 container)

  useEffect(() => {
    const onScroll = (e) => {
      let { ratio, distance } = getDistanceOfWindow(e)
      setDistance(Math.floor(distance))
      setPercentage(Math.floor(percentage))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div>{props.render(distance)}</div>
}

const ParallaxFC = {
  Container: Container,
  StickySection: StickySection,
}

export default ParallaxFC
