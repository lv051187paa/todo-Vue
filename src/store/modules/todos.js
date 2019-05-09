const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos ({commit}) {
    const response = await axios.get( '/todos' );
    commit('setTodos', response.data);
  },
  async deleteTodo({commit}, id) {
    await axios.delete( `/todos/${id}` );
    commit('deleteTodo', id);
  },
  async editTodo({commit}, todo) {
    const response = await axios.patch( `/todos/${todo.id}`, {...todo} );
    commit('editTodo', response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  editTodo: (state, todo) => {
    const index = state.todos.findIndex(todoItem => todoItem.id === todo.id);
    state.todos.splice(index, 1, todo)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
