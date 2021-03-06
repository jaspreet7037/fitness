import React, { Component } from 'react'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css'

class WorkoutInput extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'You\'re a long way from home sonny jim!';
    }
  }

  //handleSubmit = (e) => {
  //  e.preventDefault()
  //  Relay.Store.update(
  //    new CreateWorkoutMutation({
  //      workout: this.refs.Workout.value,
  //      workoutDate: this.refs.WorkoutDate.value,
  //      duration: this.refs.Duration.value,
  //      calories: this.refs.Calories.value,
  //      fatBurnTime: this.refs.FatBurnTime.value,
  //      fitnessTime: this.refs.FitnessTime.value,
  //      avgHeartRate: this.refs.AvgHeartRate.value,
  //      maxHeartRate: this.refs.MaxHeartRate.value,
  //      workoutType: this.refs.WorkoutType.value,
  //      store: this.props.store
  //    })
  //  )
  //}


  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    // <form onSubmit={this.handleSubmit}>
    //   <input type="text" placeholder="Workout" ref="Workout"/>
    //   <input type="text" placeholder="WorkoutDate" ref="WorkoutDate"/>
    //   <input type="text" placeholder="Duration" ref="Duration"/>
    //   <input type="text" placeholder="Calories" ref="Calories"/>
    //   <input type="text" placeholder="FatBurnTime" ref="FatBurnTime"/>
    //   <input type="text" placeholder="FitnessTime" ref="FitnessTime"/>
    //   <input type="text" placeholder="AvgHeartRate" ref="AvgHeartRate"/>
    //   <input type="text" placeholder="MaxHeartRate" ref="MaxHeartRate"/>
    //   <input type="text" placeholder="WorkoutType" ref="WorkoutType"/>
    //   <button type="submit">Add Workout</button>
    // </form>

    return (

      <div className={styles.fitnessBody}>
        <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Select campaign settings</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad group</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create an ad</StepLabel>
            </Step>
          </Stepper>
          <div style={contentStyle}>
            {finished ? (
              <p>
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    this.setState({ stepIndex: 0, finished: false });
                  }}
                >
                  Click here
                </a> to reset the example.
              </p>
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{ marginTop: 12 }}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{ marginRight: 12 }}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutInput
