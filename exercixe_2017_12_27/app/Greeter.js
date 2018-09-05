'use strict'
import React, {Component} from 'react'
import config from '../config.json'
import styles from './Greeter.css'
import stylesMain from './main.css'

class Greeter extends Component {
  render () {
    return (
      <div className={styles.root} //使用cssModule添加类名的方法
        >
        {config.greetText}
      </div>
    )
  }
}

export default Greeter
