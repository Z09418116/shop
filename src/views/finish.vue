
<template>
  <div >
    <div >
        <table class="ad">
            <tr>
                <td @click="back()">
                    <button><img src="../images/63.png" alt=""></button>
                </td>
            </tr>
            <tr>
                <td @click="back()">
                    <button><img src="../images/64.png" alt=""></button>
                </td>
            </tr>
            <tr>
                <td @click="back()">
                    <button><img src="../images/65.png" alt=""></button>
                </td>
            </tr>
        </table>

    </div>
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */
export default {
  methods: {
    back() {
      this.$store.dispatch("buy").then(() => {
        window.alert("购买成功");
      });
      this.$router.replace("/home");
    },
  },
};
</script>

<style>
.ad{
    margin: 0 auto;
}
.ace{
    margin: 0 auto;
    text-align: center;
}

.border{
    border:2px solid black;
}
</style>
