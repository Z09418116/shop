
<template>
    <div class="all1">
      <div style="height:20px"></div>
      <div class="search1">
        <input placeholder="请输入搜索内容" class="input1">
          <button class="button1" @click="btn()">搜索</button>
         <!-- eslint-disable-next-line vue/no-parsing-error -->
        </input>
      </div>
      <div style="height:20px "></div>
        <div class="nav">
          <ul class="clearfix">
            <li><a href="#">家用电器</a>
              <dl class="clearfix">
                <dd><a href="#">电视机</a></dd>
                <dd><a href="#">电冰箱</a></dd>
                <dd><a href="#">洗衣机</a></dd>
              </dl>
            </li>
            <li><a href="#">手机 / 数码</a>
              <dl class="clearfix">
                <dd><a href="#">华为</a></dd>
                <dd><a href="#">小米</a></dd>
                <dd><a href="#">苹果</a></dd>
              </dl>
            </li>
            <li><a href="#">家居 / 家具</a>
              <dl class="clearfix">
                <dd><a href="#">沙发</a></dd>
                <dd><a href="#">餐桌</a></dd>
                <dd><a href="#">茶几</a></dd>
              </dl>
            </li>
            <li><a href="#">素食 / 卤味</a>
              <dl class="clearfix">
                <dd><a href="#">绝味鸭脖</a></dd>
                <dd><a href="#">三圣宫</a></dd>
                <dd><a href="#">周黑鸭</a></dd>
              </dl>
            </li>
            <li><a href="#">坚果 / 炒货</a>
              <dl class="clearfix">
                <dd><a href="#">三只松鼠</a></dd>
                <dd><a href="#">百草味</a></dd>
                <dd><a href="#">良品铺子</a></dd>
              </dl>
            </li>
            <li><a href="#">糖果 / 蜜饯</a>
              <dl class="clearfix">
                <dd><a href="#">爱莲</a></dd>
                <dd><a href="#">小梅屋</a></dd>
                <dd><a href="#">CandyLab</a></dd>
              </dl>
            </li>
            <li><a href="#">巧克力</a>
              <dl class="clearfix">
                <dd><a href="#">益浓</a></dd>
                <dd><a href="#">德芙</a></dd>
                <dd><a href="#">amovo</a></dd>
              </dl>
            </li>
            <li><a href="#">海鲜 / 肉类</a>
              <dl class="clearfix">
                <dd><a href="#">海鲜礼盒</a></dd>
                <dd><a href="#">金陵惠客蟹粉</a></dd>
                <dd><a href="#">糟卤带鱼</a></dd>
              </dl>
            </li>
            <li><a href="#">花茶 / 名酒</a>
              <dl class="clearfix">
                <dd><a href="#">蜜桃白桃乌龙茶</a></dd>
                <dd><a href="#">罗汉果清茶</a></dd>
                <dd><a href="#">拉菲</a></dd>
              </dl>
            </li>
            <li><a href="#">图书 / 电子书</a>
              <dl class="clearfix">
                <dd><a href="#">网络小说</a></dd>
                <dd><a href="#">名家大作</a></dd>
              </dl>
            </li>
            <li><a href="#">箱包</a>
              <dl class="clearfix">
                <dd><a href="#">爱华仕</a></dd>
                <dd><a href="#">梵地亚</a></dd>
              </dl>
            </li>
            <li><a href="#">工具</a>
              <dl class="clearfix">
                <dd><a href="#">牙签</a></dd>
                <dd><a href="#">指甲钳</a></dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="swiper1">
              <swiper :options="swiperOption">
                <swiper-slide><img src="../images/53.png"></swiper-slide>
                <swiper-slide><img src="../images/54.png"></swiper-slide>
                <swiper-slide><img src="../images/55.png"></swiper-slide>
                <swiper-slide><img src="../images/56.png"></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
        </div>
        <div class="detail">
          <table @click="back()">
            <tr><td><img src="../images/57.png"></td></tr>
            <tr style="height:20px"><td></td></tr>
            <tr><td>[特惠]商城爆品1分秒杀</td></tr>
            <tr><td>[公告]商城与长春市签署</td></tr>
            <tr><td>[特惠]洋河年末大促，低</td></tr>
            <tr><td>[公告]华北、华中部分地</td></tr>
            <tr><td>[特惠]家电狂欢千亿礼券</td></tr>
          </table>
        </div>
      <div class="clear"></div>
      <div style="height:20px"></div>
      <div class="cuxiao">活动</div>
      <div style="border-bottom:3px solid black"></div>
      <div style="height:10px"></div>
      <div>
        <table>
          <tr>
            <td @click="back()"><img src="../images/58.png" width="300px" height="300px"></td>
            <td @click="back()"><img src="../images/59.png" width="300px" height="300px"></td>
            <td @click="back()"><img src="../images/60.png" width="300px" height="300px"></td>
            <td @click="back()"><img src="../images/61.png" width="300px" height="300px"></td>
          </tr>
        </table>
      </div>
      <div class="clear"></div>
      <div style="height:20px"></div>
      <div class="cuxiao">图书</div>
      <div style="border-bottom:3px solid black"></div>
      <div style="height:10px"></div>
      <div class="float1">
        <table>
          <!-- eslint-disable-next-line max-len -->
          <tr @click="back()"><td><img src="../images/62.png" width="300px" height="600px"></td></tr>
        </table>
      </div>
      <div>
        <table>
          <tr>
            <td @click="back()"><img src="../images/1.png" width="296px" height="300px"></td>
            <td @click="back()"><img src="../images/2.png" width="296px" height="300px"></td>
            <td @click="back()"><img src="../images/3.png" width="296px" height="300px"></td>
          </tr>
          <tr >
            <td @click="back()"><img src="../images/4.png" width="296px" height="300px"></td>
            <td @click="back()"><img src="../images/5.png" width="296px" height="300px"></td>
            <td @click="back()"><img src="../images/6.png" width="296px" height="300px"></td>
          </tr>
        </table>
      </div>
  </div>

</template>
<script>
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-dupe-keys */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
import { swiper, swiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        initialSlide: 0,
        direction: "horizontal",
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        speed: 2000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: "auto",
        loopedSlides: 4,
        loopAdditionalSlides: 0,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
      },
    };
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    },
  },
  
  methods: {
    back() {
      this.$router.replace("/list");
    },
    btn() {
      this.$router.replace("/list");
    },
  },
};
</script>
<style  scoped>
.all1 {
  margin: 0 auto;
  text-align: center;
  width: 1200px;
}
.search1 {
  margin: 0 auto;
  text-align: center;
}
.input1 {
  width: 500px;
  height: 30px;
  border: 2px solid rgb(255, 81, 0);
}
.button1 {
  width: 100px;
  height: 34px;
  border: 3px solid rgb(255, 81, 0);
  background-color: rgb(255, 81, 0);
  color: white;
}
.swiper1 {
  margin: 0 auto;
  text-align: center;
  width: 800px;
  float: left;
}
.nav {
  width: 220px;
  margin: 0 auto;
  float: left;
}
.nav ul li {
  position: relative;
  float: left;
  width: 220px;
  height: 40px;
  list-style: none;
}
.nav ul li > a {
  display: block;
  width: 100%;
  background: rgba(63, 51, 51, 0.815);
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
}
.nav ul li:hover > a {
  background: #f00;
}
.nav dl {
  display: none;
  position: absolute;
  left: 220px;
  top: 0px;
  width: 50%;
  z-index: 9999;
}
.nav dl dd {
  background: #999;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.nav dl dd a {
  display: block;
  width: 100%;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
}
.nav ul li:hover dl {
  display: block;
}
.detail {
  margin: 0 auto;
}
.div2 {
  height: 20px;
  width: 600px;
  margin: 0 auto;
  border: 1px green solid;
}
.divmulu {
  float: left;
  width: 100px;
}
.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0;
}
.cuxiao {
  text-align: left;
  font-size: 25px;
}
.float1 {
  float: left;
}
</style>
