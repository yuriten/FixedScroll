import React, { useRef } from 'react'
import { render } from 'react-dom'
import { ParallaxFC } from '../../src'

const inRange = (per, start, end) => {
  if (per < start) {
    return start
  } else if (per > end) {
    return end
  }
  return per
}
function createObjectURL(object) {
  return window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object)
}

const App = () => {
  const videoRef = useRef(null)

  return (
    <div>
      {/* 复杂版本的理想使用方式3 */}
      {/* <ParallaxFC.Container
        render={(distance) => {
          return (
            <>
              <ParallaxFC.StickySection
                top='0'
                scrollRange='500vh'
                distance={distance}
                onScroll={(percentage) => {
                  const duration = videoRef?.current?.duration
                  if (duration) {
                    let nextTime = duration * percentage || 0
                    if (nextTime > duration) {
                      nextTime = duration
                    }
                    nextTime = Number(nextTime.toFixed(2))
                    videoRef.current.currentTime = nextTime
                    console.log('nextTime', nextTime)
                  }
                }}
                render={(percentage) => {
                  return (
                    <div
                      style={{
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <p style={{ position: 'absolute', color: 'pink', zIndex: 100 }}>
                        {percentage}
                      </p>
                      <div
                        style={{
                          transform: `scale(${5 - inRange(percentage, 0.1, 0.7) * 5})`,
                          // transform: `matrix(1, 0, 0, 1, 0, 0)`,
                          transformOrigin: 'center',
                          height: '100%',
                          width: '100%',
                        }}
                      >
                        <img
                          src='https://p1-1253565450.cos.ap-beijing.myqcloud.com/macbookmock.png'
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%)`,
                            height: 350,
                            width: 580,
                          }}
                        />
                        <video
                          ref={videoRef}
                          disablePictureInPicture={true}
                          disableRemotePlayback={true}
                          // autoPlay={true}
                          playsInline
                          muted
                          aria-hidden='true'
                          src={'https://p1-1253565450.cos.ap-beijing.myqcloud.com/apple-air.mp4'}
                          onLoad={() => {
                            console.log('load')
                          }}
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -52%)`,
                            height: 292,
                            width: 470,
                            objectFit: `fill`,
                          }}
                        />
                      </div>
                    </div>
                  )
                }}
              />
              <section className='' style={{ height: 400, background: 'gray' }}>
                Spacer Section
              </section>
              <ParallaxFC.StickySection
                top='100px'
                scrollRange='400vh'
                distance={distance}
                render={(percentage) => {
                  return <div>元素的滚动百分比：{percentage}</div>
                }}
              />
              <section className='' style={{ height: 1000, background: 'gray' }}>
                Spacer Section
              </section>
            </>
          )
        }}
      /> */}

      <ParallaxFC.Container
        render={(distance) => {
          return (
            <>
              <ParallaxFC.StickySection // StickySection 块的内容会以某种方式固定在屏幕上
                distance={distance} //必须将 distance 传入内部
                top={0} // 距离顶部的距离，传入一个 数字或 css高度单位
                scrollRange='500vh' // 滚动高度范围，表示这个区域要滚动多长才会结束，传入一个 数字或 css高度单位
                // render 是必须传入的要渲染的内容
                // percentage 表示元素当前滚动的百分比，由内部自动计算得来
                // 元素内部通过这个百分比来构建动画
                render={(percentage) => {
                  return (
                    <div style={{ background: 'lightgray' }}>元素的滚动百分比：{percentage}</div>
                  )
                }}
              />
              <section style={{ padding: 200, background: 'gray', color: 'white' }}>
                Spacer Section 这是一个正常的 html 元素，行为和普通元素没有区别。
              </section>
              <ParallaxFC.StickySection // 第二个需要固定的内容
                distance={distance}
                top={0}
                scrollRange='500vh'
                render={(percentage) => {
                  return (
                    <div style={{ background: 'lightgray' }}>元素的滚动百分比2：{percentage}</div>
                  )
                }}
              />
            </>
          )
        }}
      />

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
