import React, { Component } from 'react'
import Relay from 'react-relay'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { heartContent, workoutContents, calStyle, hbAvgMaxStyle, timeStyle, heartStyle, hbStyle } from './styles.css'
import CountUp from 'react-countup'
import FontAwesome from 'react-fontawesome'
import { workoutEnumToDisplay } from '../../util'

function sanitizeTime({ hours, minutes, seconds }) {
  if (!hours) {
    hours = 0
  }
  if (!minutes) {
    minutes = 0
  }
  if (!seconds) {
    seconds = 0
  }
  return { hours, minutes, seconds }
}

function getTimeInMinutes({ hours, minutes }) {
  return (hours * 60) + minutes
}

function getTotalTimeString({ hours, minutes, seconds }) {
  return `${hours} h  ${minutes} m  ${seconds} s`
}

class WorkoutCard extends Component {

  render() {
    const { workout } = this.props
    const fitnessTime = getTimeInMinutes(sanitizeTime(workout.fitnessTime))
    const fatBurnTime = getTimeInMinutes(sanitizeTime(workout.fatBurnTime))
    const timeData = [{ name: 'Fitness Minutes', value: fitnessTime }, { name: 'Fat Burn Minutes', value: fatBurnTime }]
    const colors = ['orangered', 'darkorange']
    const totalTime = getTotalTimeString(sanitizeTime(workout.duration))
    const avgAndMax = `${workout.avgHeartRate} / ${workout.maxHeartRate}`


    return (
      <Card style={{ width: 300, marginBottom: 10 }}>
        <CardHeader
          title={workoutEnumToDisplay(workout.workout)}
          subtitle={workout.workoutType === "RES" ? "Resistance" : "Cardio"}
          avatar={
            <FontAwesome
              name={workout.workoutType === "RES" ? 'fire' : 'bolt'}
              size='2x'
            />
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <div className={workoutContents}>
            <div>
              <CountUp
                className={calStyle}
                start={0}
                end={workout.calories}
                duration={1.6}
                useEasing={true}
                suffix=" Cal"
              />
            </div>
            <div className={heartContent}>
              <FontAwesome
                className={heartStyle}
                name='heartbeat'
                size='3x'
              />
              <div className={hbStyle}>
                { avgAndMax}
              </div>
            </div>
            <div className={hbAvgMaxStyle}>
              avg / max
            </div>
            <PieChart width={300} height={250}>
              <Pie isAnimationActive={true} data={timeData} cx={150} cy={125} outerRadius={80} fill="#82ca9d" label>
                {
                  timeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                  ))
                }
              </Pie>
              <Tooltip/>
            </PieChart>
            <div className={timeStyle}>
              {totalTime}
            </div>
          </div>
        </CardText>
      </Card>    )
  }
}


export default Relay.createContainer(WorkoutCard, {
  fragments: {
    workout: () => Relay.QL`
      fragment on WorkoutType {
            workout
            workoutDate
            calories
            duration {
              minutes
              seconds
              hours
            }
            fatBurnTime {
              minutes
              seconds
              hours
            }
            fitnessTime {
              minutes
              seconds
              hours
            }
            avgHeartRate
            maxHeartRate
            workoutType
      }`
  }
})
