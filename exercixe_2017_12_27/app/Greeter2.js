'use strict'
import React, {Component} from 'react'
import config from '../config.json'
import styles from './Greeter.css'
import stylesMain from './main.css'
console.log(styles, config, stylesMain)
class Greeter extends Component {
  render () {
    return (
      <div className={styles.root} //使用cssModule添加类名的方法
        >
        {config.greetText}
        {config.greetText}
      </div>
    )
  }
}

export default Greeter
