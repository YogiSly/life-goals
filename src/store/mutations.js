export default {
  setGoals(state, data) {
    data.map(obj => ({ ...obj, Active: 'false' }))
    state.goals = data
  },
  setGoal(state, data) {
    // debugger
    // console.log();
    // data.map(obj => ({ ...obj, Active: 'false' }))
    state.goal = data.goals
  },
  addGoal(state, data) {
    state.goal = data
  }
}