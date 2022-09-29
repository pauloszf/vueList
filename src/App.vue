<template>
  <div class="todoList">
    <div class="title has-text-centered">
      Todo List
    </div>
    <form
      @submit.prevent="addTodo"
    >
      <div class="field is-grouped mb-5">
        <div class="control is-expanded">
          <input 
            v-model="newTodoContent"
            class="input" 
            type="text" 
            placeholder="Add a todo"
          >
        </div>
        <div class="control">
          <button
            :disabled="!newTodoContent"
            class="button is-info"
          >
            Add
          </button>
        </div>
      </div>
    </form>

    <div 
      v-for="todo in todos"
      class="card mb-5"
      :class="{ 'has-background-success-light' : todo.done}"
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div 
              class="column"
              :class="{ 'has-text-success line-through': todo.done }"
            >
              {{todo.content}}
            </div>
            <div class="column is-5 has-text-right">
              <button 
                @click="toggleDone(todo.id)"
                class="button"
                :class="todo.done ? 'is-success' : 'is-light'"
              >
                &check;
              </button>
              <button
                @click="deleteTodo(todo.id)"
                class="button is-danger ml-2"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  // Imports 
  import { ref, onMounted } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import { collection, query, where, onSnapshot } from "firebase/firestore"
  import { db } from '@/firebase'

  // Todos 

  const todos= ref([
    // {
    //   id: 'id1',
    //   content: 'Create a todo',
    //   done: false
    // },
    // {
    //   id: 'id2',
    //   content: 'Update a todo',
    //   done: true
    // },
  ])

  // Add Todo 
  const newTodoContent = ref('');

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      content: newTodoContent.value,
      done: false
    }
    
    todos.value.unshift(newTodo)
    newTodoContent.value='';
  }

  // Get todos

  onMounted(() => {
    onSnapshot(collection(db, "todos"), (querySnapshot) => {
      const fbTodos = [];
      querySnapshot.forEach((doc) => {
        const todo = {
          id: doc.id,
          content: doc.data().content,
          done: doc.data().done
        }

        fbTodos.push(todo);
      });
      todos.value = fbTodos;
    });
  })

  // Delete todo 

  const deleteTodo = id => {
    todos.value = todos.value.filter(todo => todo.id !== id);
  }

  // toggle done 
  const toggleDone = id => {
    const index = todos.value.findIndex(todo => todo.id === id);

    todos.value[index].done = !todos.value[index].done
  }

</script>

<style>
@import 'C:/Users/paulo/Documents/Desenvolvimento/vueapplist/vueList/node_modules/bulma/css/bulma.min.css';

.todoList {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>