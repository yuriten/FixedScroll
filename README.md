

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
    <div
      style={{ height: '100%' }}
    >
      <FixedScrollFC
        height={10000}
        contents={[
          <h1 className=''>Step1</h1>,
          <h1 className=''>Step2</h1>,
          <h1 className=''>Step3</h1>,
        ]}
      />
    </div>
  )
}
render(<App />, document.getElementById('root'))
```

| props    | value | explain          | require |
| -------- | ----- | ---------------- | ------- |
| height   | 1000  | px               | true    |
| contents | []    | Components Array | true    |
