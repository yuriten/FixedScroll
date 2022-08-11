
> version 2022.08.11

## Install

* 请确保已经声明 DTD，否则无法使用。
* 必须基于 React 使用。

```
yarn add fixed-scroll
```

## Import
```javascript
// 目前提供函数式组件(FC)，未来可能提供 Class Components
import { ParallaxFC } from 'fixed-scroll'
```


## 使用范例
用文字解释动画效果有些辛苦，请复制范例代码或查看图片
```javascript

import React, { useEffect, useRef } from 'react'
import { render } from 'react-dom'
import { FixedScrollFC } from 'fixed-scroll'

const App = () => {
  return (
    <ParallaxFC.Container
      render={(distance) => {
        return (
          <>
            <ParallaxFC.StickySection // StickySection 块的内容会以某种方式固定在屏幕上
              distance={distance} //必须将 distance 传入内部
              scrollRange='500vh' // 滚动高度范围，表示这个区域要滚动多长才会结束，传入一个 数字或 css高度单位
              top={0} // 距离顶部的距离，传入一个 数字或 css高度单位
              // render 是必须传入的要渲染的内容
              // percentage 表示元素当前滚动的百分比，由内部自动计算得来
              // 元素内部通过这个百分比来构建动画
              render={(percentage) => {
                return (
                  <div style={{ background: 'lightgray' }}>百分比 {percentage}</div>
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
                  <div style={{ background: 'lightgray' }}>第二项百分比 {percentage}</div>
                )
              }}
            />
          </>
        )
      }}
    />
  )
}
render(<App />, document.getElementById('root'))
```

## Props

### ParallaxFC.Container
| propName | example             | explain                                     | require |
| -------- | ------------------- | ------------------------------------------- | ------- |
| render   | (distance) => <></> | 传入 react 函数组件，暴露一个 distance 参数 | true    |



### ParallaxFC.StickySection
StickySection 块的内容会以某种方式固定在屏幕上，在代码里必须被放置在 Container 的 render 中，否则不起作用。
| propName    | example               | explain                                                                                    | require |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------ | ------- |
| distance    | distance              | 将 container render 函数中的 distance 参数传下去即可                                       | true    |
| render      | (percentage) => <></> | 传入 react 函数组件，percentage 指当前滚动的百分比，取值范围通常是 0 - 1，但也可能出现负数 | true    |
| scrollRange | 500vh                 | 滚动高度范围，表示这个区域要滚动多长才会结束，传入一个数字或 css 高度                      | false   |
| top         | 0                     | 距离顶部的距离，传入一个数字或 css 高度                                                    | false   |


