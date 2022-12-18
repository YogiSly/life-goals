export default {
  setGoals(state, data) {
    data.map(obj => ({ ...obj, Active: 'false' }))

    state.goals = data
  }
}