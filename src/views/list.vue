<template>
  <div v-show="list.length">
    <div class="list-control">
      <div class="list-control-filter">
        <span>书籍类型:</span>
        <span
          class="list-control-filter-item"
          :class="{ on: item === filterType }"
          v-for="(item, index) in types"
          :key="index"
          @click="handleFilterType(item)"
          >{{ item }}</span
        >
      </div>
      <div class="list-control-filter">
        <span>作者国籍:</span>
        <span
          class="list-control-filter-item"
          :class="{ on: item === filterCountry }"
          v-for="(item, adc) in countrys"
          :key="adc + 'b'"
          @click="handleFilterCountry(item)"
          >{{ item }}</span
        >
      </div>

      <div class="list-control-order">
        <span>排序:</span>
        <span
          class="list-control-order-item"
          :class="{ on: order === '' }"
          @click="handleOrderDefault"
          >默认</span
        >
        <span
          class="list-control-order-item"
          :class="{ on: order === 'sales' }"
          @click="handleOrderSales"
        >
          销量
          <template v-if="order === 'sales'">↓</template>
        </span>
        <span
          class="list-control-order-item"
          :class="{ on: order.indexOf('cost') > -1 }"
          @click="handleOrderCost"
        >
          价格
          <template v-if="order === 'cost-desc'">↓</template>
          <template v-if="order === 'cost-asc'">↑</template>
        </span>
      </div>
    </div>
    <Product
      v-for="item in filteredAndOrderedList"
      :info="item"
      :key="item.id"
    ></Product>
    <div class="product-not-found" v-show="!filteredAndOrderedList.length">
      暂无相关商品
    </div>
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
/* eslint-disable arrow-parens */
import Product from "../components/product.vue";
export default {
  components: { Product },
  computed: {
    list() {
      return this.$store.state.productList;
    },
    types() {
      return this.$store.getters.types;
    },
    countrys() {
      return this.$store.getters.countrys;
    },
    filteredAndOrderedList() {
      let list = [...this.list];
      if (this.filterType !== "") {
        list = list.filter((item) => item.type === this.filterType);
      }
      if (this.filterCountry !== "") {
        list = list.filter((item) => item.country === this.filterCountry);
      }
      if (this.order !== "") {
        if (this.order === "sales") {
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this.order === "cost-desc") {
          list = list.sort((a, b) => b.cost - a.cost);
        } else if (this.order === "cost-asc") {
          list = list.sort((a, b) => a.cost - b.cost);
        }
      }
      return list;
    },
  },
  data() {
    return {
      filterType: "",
      filterCountry: "",
      order: "",
    };
  },
  methods: {
    handleFilterType(Type) {
      if (this.filterType === Type) {
        this.filterType = "";
      } else {
        this.filterType = Type;
      }
    },
    handleFilterCountry(Country) {
      if (this.filterCountry === Country) {
        this.filterCountry = "";
      } else {
        this.filterCountry = Country;
      }
    },
    handleOrderDefault() {
      this.order = "";
    },
    handleOrderSales() {
      this.order = "sales";
    },
    handleOrderCost() {
      if (this.order === "cost-desc") {
        this.order = "cost-asc";
      } else {
        this.order = "cost-desc";
      }
    },
  },
  mounted() {
    this.$store.dispatch("getProductList");
  },
};
</script>

<style scoped>
.list-control {
  background: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.list-control-filter {
  margin-bottom: 16px;
}
.list-control-filter-item,
.list-control-order-item {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  margin-right: 6px;
  padding: 2px 6px;
}
.list-control-filter-item.on,
.list-control-order-item.on {
  background: #f2352e;
  border: 1px solid #f2352e;
  color: #fff;
}
.product-not-found {
  text-align: center;
  padding: 32px;
}
</style>
