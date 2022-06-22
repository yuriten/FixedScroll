
> version 2022.06.21

## Install

* 请确保已经声明 DTD，否则无法使用。
* 必须基于 React 使用。

```
yarn add fixed-scroll
```

## Import
```javascript
// 目前提供函数式组件以供使用，未来可能提供 Components 
import { FixedScrollFC } from 'fixed-scroll'
```


## Use
```javascript

import React, { useEffect, useRef } from 'react'
import { render } from 'react-dom'
import { FixedScrollFC } from 'fixed-scroll'

const App = () => {
  return (
    <FixedScrollFC
      containerHeight={500}
      insideHeight={10000}
      contents={[
        <div style={{ background: '#333', width: 300, height: 300 }}>1</div>,
        <div style={{ background: '#666', width: 300, height: 300 }}>2</div>,
        <div style={{ background: '#999', width: 300, height: 300 }}>3</div>,
        <div style={{ background: '#ddd', width: 300, height: 300 }}>4</div>,
      ]}
    />
  )
}
render(<App />, document.getElementById('root'))
```

## Props

| propName            | example              | explain          | require |
| ------------------- | -------------------- | ---------------- | ------- |
| contentHeight       | 1000                 | number & string  | true    |
| height              | 50vh                 | number & string  | true    |
| contents            | []                   | Components Array | true    |
| backgroundClassName | pink                 | string           | false   |
| backgroundStyle     | {{backgound:"pink"}} | CSSProperties    | false   |
| 设置动画方向        | ?                    | ?                | false   |


### contentHeight
内容高度，也就是可滚动高度，通常是一个很大的数字，远大于用户屏幕能展示的高度，设置

### height
容器视口的高度，设置后会限制 contentHeight 的内容在 height 的范围内滚动，通常是一个很小的数字。这个属性会强制覆盖掉 css 设置的高度。

### contents
一组由元素构成的数组，通常来说，他们会均分掉 contentHeight：
  - 如果传了 3 个元素，那么每个元素的高度就是 1/3 contentHeight
  - 如果传了 4 个元素，那么每个元素的高度就是 1/4 contentHeight
  
内部的切换是自动完成的。

### backgroundClassName && backgroundStyle
用于设置容器的样式

