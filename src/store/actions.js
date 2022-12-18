export default {
    setGoals({commit}) {
    fetch('http://localhost:3000/goals').then((res) =>
      res.json().then((data) => {
        commit("setGoals", data) 
      })
    );
  }
}