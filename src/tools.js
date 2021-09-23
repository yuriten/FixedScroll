let movingTimer = null
let moving = false

// 再开始时监听的定时器类型
const scrollHook = (e, moveStart, moveEnd) => {
  let minimumScroll = 10
  if (Math.abs(e.deltaY) > minimumScroll) {
    let direction = e.deltaY > 0 ? 1 : -1
    if (moving === false) {
      moving = true
      moveStart && moveStart(direction)
      movingTimer = setTimeout(() => {
        moveEnd && moveEnd(direction)
        moving = false
      }, 1500)
    }
  }
}

// 第二种备选方案
// const scrollHook = (e, moveStart, moveEnd) => {
//   let minimumScroll = 10
//   if (Math.abs(e.deltaY) > minimumScroll) {
//     if (movingTimer) {
//       clearTimeout(movingTimer)
//     }
//     let direction = e.deltaY > 0 ? 1 : -1
//     movingTimer = setTimeout(() => {
//       console.log('时间到，设置 moving 为 false')
//       moveEnd && moveEnd(direction)
//       moving = false
//     }, 200)
//     if (moving === false) {
//       moving = true
//       moveStart && moveStart(direction)
//     }
//   }
// }

export { scrollHook }
