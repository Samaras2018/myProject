import axios from 'axios'
const state = {
  todos:[],
};

const getters = {
 allTodos (state) {return state.todos}
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(data=>data.json());
        commit('setTodos', response)
        
    },
    async addTodo ({  commit  }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false});
                commit('newTodo', response.data)
        
    },
    async deleteTodo({ commit }, index) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${index}`)
        commit('remove', index)
    },
    limit({ commit },limitAmount) {
        commit('limitIt', limitAmount)
    }
};

const mutations = {
    setTodos(state, todos) {
        state.todos = todos
    },
    newTodo(state, todo) {
        state.todos.unshift(todo)
    },
    remove(state, index) {
        state.todos.splice(index,1)
    },
    limitIt(state, amount) {
        state.todos = state.todos.filter((item, index,arr)=> arr.length = arr.length - (arr.length - amount))
        return state.todos
    }
};




export default {
  state,
  getters,
  actions,
  mutations,
};
