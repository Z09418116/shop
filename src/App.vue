<template>
  <div>
    <template v-if="show">
      <div class="header">
        <div class="header-title">
          {{ user }}
        </div>
        <div class="header-title">
          <router-link to="/login/logout" class="header-menu-cart">
            退出登录
          </router-link>
        </div>
        <div class="header-menu">
          <router-link to="/home" class="header-title"
            >电商网站首页
          </router-link>
          <router-link to="/cart" class="header-menu-cart">
            购物车
            <span v-if="cartList.length">{{ cartList.length }}</span>
          </router-link>
        </div>
      </div>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.username,
      password: this.$store.state.password,
    };
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    show() {
      return this.$store.state.loginStatus;
    },
  },
};
</script>

<style scoped>
</style>
