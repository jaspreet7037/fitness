import React, { Component } from 'react'
import styles from './styles.css'

class Nav extends Component {

  render() {
    return (
      <div className={styles.nav}>
        <span className={styles.workoutBuddy}>
          Workout Buddy
        </span>
        <span className={styles.verticalRuleNav}/>
        <span className={styles.navLink}>Input</span>
        <span className={styles.navLink}>Workouts</span>
        <span className={styles.navLink}>Trends</span>
      </div>
    )
  }
}

export default Nav
