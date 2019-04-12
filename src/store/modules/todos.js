// initiState
const state = {
  todos: [
    {
      id: 1,
      title: 'Todo One'
    },
    {
      id: 2,
      title: 'Todo Two'
    },
    {
      id: 3,
      title: 'Todo Three'
    }
  ]
}

// to send methods from store to requester
const getters = {
  allTodos: function(state) {
    return  state.todos
  }
}

// def action creators
const actions = {

  async handleFetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                            .then((response) => response.json())

    // this.commit() method take in 2 parm(type, payload)
    this.commit('setTodos', response)
  },
  async handleAddTodo({}, title) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ title, completed: false })
      })
      .then((response) => response.json())

      // this.commit() method take in 2 parm(type, payload)
      this.commit('newTodo', response)
  },
  async handleDeleteTodo({}, id) {
    await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ id })
      })
      .then((response) => response.json())

      this.commit('removeTodo', id)
  },
  async handleFilterTodos({}, value) {
    console.log('e: ', value.innerText);
    // console.log(typeof parseInt(e.target.options[e.target.options.selectedIndex].innerText))
  }

}

// any mutation to state def function
const mutations = {
  setTodos: function(state, todos) {
    return state.todos = todos
  },
  newTodo: function(state, todo) {
    return state.todos.unshift(todo);
  },
  removeTodo: function(state, id) {
    return state.todos = state.todos.filter(value => value.id !== id)
  }
}
 
export default {
  state,
  getters,
  actions,
  mutations
}