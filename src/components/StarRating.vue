<template>
  <div class="container text-center mt-5" style="margin-top: 0 !important;">
    <h2 style="margin-bottom: 25px;font-weight: bolder;">
      “小芦意”夏令营暨“小候鸟”爱心托班学员签到板
    </h2>
    <div class="row">
      <div class="col-12">
        <div class="star-container" v-for="(name, index) in names" :key="index" @click="toggleStar(index)">
          <i class="fa fa-star star" :class="{ active: activeStars[index] }"></i>
          <span class="name">{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const names = [
'陈芷晗',
'邓星彤',
'邓雅婷',
'李金诚',
'窦坤坤',
'段易娜',
'段易姗',
'段奕帆',
'郭俊义',
'韩旭',
'洪梓辰',
'黄欣妍',
'林梓晨',
'吕恩希',
'吕金希',
'木子恒',
'王梓萱',
'王梓萱',
'尹子涵',
'张博文',
'徐君浩',
'徐天昊',
'纪一诺',
'张艺婷',
'张君浩',
'樊梦瑶',
'金语彤',
'黄清蕾',
'黄晨俊',
'朱清妍',
'蒋书言',
'黄芸熙',
'汤佳棋',
'汤佳程',
'李奕洋',
'丁梦燕',
'王致远',
'乔双',
'牟梓萱',
'刘梦娴 ',
'刘梦妍',
'杨娜雅',
'孙翊晴',
'谭俊宇',
'刘蒙伟',
'侯超阳',
'杨浩男',
'郑皓轩',
'兰兆宇',
];

export default {
  data() {
    return {
      names,
      activeStars: [false, false, false, false, false],
    };
  },
  methods: {
    toggleStar(index) {
      this.$set(this.activeStars, index, !this.activeStars[index]);
    },
  },
};
</script>

<style scoped>
.star-container {
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  position: relative;
}
.star {
  font-size: 80px;
  color: #ccc;
  transition: color 0.3s;
}
.star.active {
  color: gold;
}
.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-weight: bold;
  font-size: 14px;
  color: black;
}
</style>
