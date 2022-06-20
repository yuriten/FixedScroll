

# Install

* 请确保已经声明 DTD，否则无法使用。
* 必须基于 React 使用。

```
yarn add fixed-scroll
```

# Import
```javascript

// 目前提供函数式组件以供使用，未来可能提供 Components 
import { FixedScrollFC } from 'fixed-scroll'
```


# Use
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

| props    | value | explain          | require |
| -------- | ----- | ---------------- | ------- |
| height   | 1000  | px               | true    |
| contents | []    | Components Array | true    |
