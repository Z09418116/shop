

<template>
  <div v-if="product">
    <div class="product">
      <div class="product-image">
        <!-- eslint-disable-next-line vue/no-parsing-error -->
        <pic-zoom :url="product.image" :scale="3"/></pic-zoom>
      </div>
      <div class="product-info">
        <h1 class="product-name">书名：{{ product.name }}</h1>
        <h1 class="product-name">作者：{{ product.author }}</h1>
        <div class="product-cost">价格：{{ product.cost }}</div>
        <div>简介：{{ product.introduce }}</div>
        <div class="product-add-cart" @click="handleAddCart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */
/* eslint-disable radix */
/* eslint-disable arrow-parens */
import product_data from "../product.js";
import PicZoom from "vue-piczoom";
export default {
  name: "product",
  components: {
    PicZoom,
  },
  data() {
    return {
      id: parseInt(this.$route.params.id),
      product: null,
    };
  },
  methods: {
    getProduct() {
      setTimeout(() => {
        this.product = product_data.find((item) => item.id === this.id);
      }, 500);
    },
    handleAddCart() {
      this.$store.commit("addCart", this.id);
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
<style scoped>
.product {
  margin: 32px;
  padding: 32px;
  background: #fff;
  border: 1px solid #dddee1;
  border-radius: 10px;
  overflow: hidden;
}
.product-image {
  width: 30%;
  height: 400px;
  float: left;
  text-align: center;
}
.product-image img {
  height: 100%;
}
.product-info {
  width: 50%;
  padding: 150px 0 250px;
  height: 150px;
  float: left;
  text-align: center;
}
.product-cost {
  color: #f2352e;
  margin: 8px 0;
}
.product-add-cart {
  display: inline-block;
  padding: 8px 64px;
  margin: 8px 0;
  background: #2d8cf0;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.product-desc {
  background: #fff;
  margin: 32px;
  padding: 32px;
  border: 1px solid #dddee1;
  border-radius: 10px;
  text-align: center;
}
.product-desc img {
  display: block;
  width: 50%;
  margin: 32px auto;
  padding: 32px;
  border-bottom: 1px solid #dddee1;
}
</style>
