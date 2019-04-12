<template>
  <div>
    <p>Todo Components</p>
    <div class="todos">
      <div v-for='todo in allTodos' v-bind:key='todo.id' class="todo">
        {{ todo.title }}
        <i @click='handleDeleteTodo(todo.id)' class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  // def 
  methods: {
    ...mapActions(['handleFetchTodos', 'handleDeleteTodo'])
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.handleFetchTodos();
  }
}
</script>

<style scroped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  border: 2px solid red;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>

