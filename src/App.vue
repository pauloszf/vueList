<template>
  <div class="todoList">
    <div class="title has-text-centered">
      Todo List
    </div>
    <div class="field is-grouped mb-5">
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo">
      </div>
      <div class="control">
        <a class="button is-info">
          Add
        </a>
      </div>
    </div>

    <div v-for="i in 3" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column">
              Create a list
            </div>
            <div class="column is-5 has-text-right">
              <button class="button is-light">
                &check;
              </button>
              <button class="button is-danger ml-2">
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
@import 'C:/Users/paulo/Documents/Desenvolvimento/vueapplist/vueList/node_modules/bulma/css/bulma.min.css';

.todoList {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

</style>