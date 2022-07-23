import React, { useState, useRef, useCallback, useEffect } from 'react'
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
      <ParallaxFC.Container
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
