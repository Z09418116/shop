<template>
  <div class="tasks">
    <input type="checkbox" name="check"  />
    <label style="margin-left: 20px">{{ todo.peoplename }}</label>
    <label style="margin-left: 40px">{{ todo.place }}</label>
    <button @click="deleteTodo(todo)" class="btn">删除</button>
    <button @click="showModal = true" class="btn">查看</button>
    <div class="tasks">
      <div class="mask" v-if="showModal" @click="showModal = false"></div>
      <div class="pop" v-if="showModal">
        <p>peoplename:{{ todo.peoplename }}</p>
        <p>Place:{{ todo.place }}</p>
        <p>phone:{{ todo.phone }}</p>
        <p>email:{{ todo.email }}</p>
        <br />
        <button @click="showModal2 = true" class="btn">修改</button>

        <button @click="showModal = false" class="btn">关闭</button>
      </div>

      <div class="pop" v-if="showModal && showModal2">
        <p>peoplename:</p>
        <input type="text" v-model="todo.peoplename" class="text" />
        <p>Place:</p>
        <input type="text" v-model="todo.place" class="text" />
        <p>phone:</p>
        <input type="text" v-model="todo.phone" class="text" />
        <p>email:</p>
        <input type="text" v-model="todo.email" class="text" />
        <button @click="gb" class="btn">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert */
/* eslint-disable no-useless-return */
/* eslint-disable no-undef */
export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false,
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    deleteTodo(todo) {
      if (window.confirm('是否删除该条纪录')) {
        this.$emit('delete-todo', todo);
      } else return;
    },
    gb() {
      this.showModal = false;
      this.showModal2 = false;
    },
  },
};
</script>

<style scoped>
button {
  background-color: white;
  border: 0px;
  color: rgb(24, 34, 167);
}
.tasks {
  text-align: center;
}
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
  text-align: center;
  position: fixed;
  top: 100px;
  left: 800px;
  width: 400px;
  height: 300px;
  z-index: 2;
}
.btn {
  background-color: white;
  border: 0px;
  color: rgb(24, 34, 167);
}
</style>
