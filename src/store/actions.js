import axios from 'axios'
export default {
    setGoals({commit}) {
    fetch('http://localhost:3000/goals').then((res) =>
      res.json().then((data) => {
        commit("setGoals", data)
      })
    );
  },
  setGoal({ commit },id) {
    fetch(`http://localhost:3000/goals/${id}`).then((res) =>
      res.json().then((data) => {
        console.log(data);
        commit("setGoal", {id:+id, goals: data.goals})
      })
    );
  },
  addGoal({commit},data){
    axios.post(`http://localhost:3000/goals/${data.id}`, { name: data })
    .then((res)=>{
      commit("addGoal", { name: res })
    })
  }
}