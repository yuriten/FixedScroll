import React from 'react'
import { scrollHook } from './tools'
import './style.css'

class Keynote extends React.Component {
  state = {
    page: 1,
  }

  onStart = (dir) => {
    let nextPage = this.state.page + dir
    if (nextPage < 1) {
      nextPage = 1
    }
    if (nextPage > this.props.contents.length) {
      nextPage = this.props.contents.length
    }
    this.setState({ page: nextPage })
  }

  onEnd = (dir) => {
    console.log('结束')
  }

  componentDidMount() {
    this.onScroll = (e) => scrollHook(e, this.onStart, this.onEnd)
    window.addEventListener('wheel', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  render() {
    let props = this.props
    let { page } = this.state
    return (
      <div className='K-container'>
        <div className='K-background-container'></div>
        <div className='K-foreground-container'>
          {props.contents.map((con, index) => {
            let mePage = index + 1
            let isMe = page === mePage
            let styles = {}

            if (isMe) {
              styles = { transform: 'translateY(0%) translateZ(0px)', opacity: 1, zIndex: 10 }
            }
            if (mePage < page) {
              styles = { transform: 'translateY(-80%) translateZ(0px)', opacity: 0, zIndex: 0 }
            }
            if (mePage > page) {
              styles = { transform: 'translateY(80%) translateZ(0px)', opacity: 0, zIndex: 0 }
            }

            return (
              <section key={index} style={styles} className={'K-foreground-item'}>
                {con}
              </section>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Keynote
