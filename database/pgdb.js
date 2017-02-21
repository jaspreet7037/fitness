import humps from 'humps'

export default (pgPool) => {
  // queries here
  return {
    getWorkouts() {
      return pgPool.query(`
      select * from workouts
      `).then(res => {
        return humps.camelizeKeys(res.rows)
      })
    },
    getWorkoutsByDate(date) {
      return pgPool.query(`
      select * from workouts
      where workout_date = $1
      `, [date]).then(res => {
        return humps.camelizeKeys(res.rows)
      })
    },
    addNewWorkout(
      {
        workout, workoutDate, duration, calories, fatBurnTime, fitnessTime, avgHeartRate, maxHeartRate, workoutType
      }) {
      return pgPool.query(`
        insert into workouts("workout",
          "workout_date",
          "duration",
          "calories",
          "fat_burn_time",
          "fitness_time",
          "avg_heart_rate",
          "max_heart_rate",
          "workout_type")
        values
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        returning *
      `, [workout, workoutDate, duration, calories, fatBurnTime, fitnessTime, avgHeartRate, maxHeartRate,
          workoutType]).then(res => {
        return humps.camelizeKeys(res.rows[0])
      })

    }
  }
}