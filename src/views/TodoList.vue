<template>
<!-- eslint-disable vue/require-v-for-key  -->
<!-- eslint-disable vue/no-parsing-error -->
 <!-- eslint-disable vue/valid-v-for  -->
  <div class="cart">
    <div class="cart-header">
      <Todo
        v-for="(todo, index) in todos"
        :todo="todo"
        :key="index"
        @delete-todo="deleteTodo"
      ></Todo>

      <div class="tasks">
        <div class="mask" v-if="showModal" @click="showModal = false"></div>
        <div class="pop" v-if="showModal">
          <p>personname:</p>
          <input type="text" v-model="l.peoplename" class="text" />
          <p>Place:</p>
          <input type="text" v-model="l.place" class="text" />
          <p>phone:</p>
          <input type="text" v-model="l.phone" class="text" />
          <p>email:</p>
          <input type="text" v-model="l.email" class="text" />
          <br />
          <button @click="add" class="btn">添加</button>
          <button @click="showModal = false" class="btn">关闭</button>
        </div>
        <button @click="showModal = true" class="btn">添加</button>
      </div>
      <div style="height: 50px"></div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Todo from './Todo.vue';

export default {

  props: ['todos'],
  data() {
    return {
      showModal: false,
      l: {
        peoplename: '',
        place: '',
        phone: '',
        email: '',
      },
      f: 0,
      checked: false,
    };
  },
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    add() {
      this.f = this.todos.length;

      this.todos.splice(this.f, 1, this.l);
      this.l = { peoplename: '', place: '', phone: '', email: '' };
    },
  },
};
</script>

<style scoped>
.tasks {
  text-align: center;
}

.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.pop {
  background-color: #fff;

  position: fixed;
  top: 100px;
  left: 800px;
  width: 400px;
  height: 300px;
  z-index: 2;
}
.btn {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}
.margin {
  margin: 0 auto;
}
.cart {
  margin: 32px;
  background: #fff;
  border: 1px solid #dddee1;
  border-radius: 10px;
}
</style>
