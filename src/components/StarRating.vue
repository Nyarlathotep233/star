<template>
  <div class="container text-center mt-5">
    <div class="row" v-for="(row, rowIndex) in starRows" :key="rowIndex">
      <div class="col-12 d-flex justify-content-center">
        <div
          class="star-container"
          v-for="(name, index) in row"
          :key="index"
          @click="toggleStar(globalIndex(rowIndex, index))"
        >
          <img
            :src="activeStars[globalIndex(rowIndex, index)] ? require('@/assets/active.png') : require('@/assets/passive.png')"
            alt="star"
            class="star"
          />
          <!-- <span
            class="name"
            :class="{ active: activeStars[globalIndex(rowIndex, index)] }"
          >{{ name }}</span> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const names = [
  '陈芷晗', '邓星彤', '邓雅婷', '李金诚', '窦坤坤', '段易娜', '段易姗', '段奕帆',
  '郭俊义', '韩旭', '洪梓辰', '黄欣妍', '林梓晨', '吕恩希', '吕金希', '木子恒',
  '王梓萱', '王梓萱', '尹子涵', '张博文', '徐君浩', '徐天昊', '纪一诺', '张艺婷',
  '张君浩', '樊梦瑶', '金语彤', '黄清蕾', '黄晨俊', '朱清妍', '蒋书言', '黄芸熙',
  '汤佳棋', '汤佳程', '李奕洋', '丁梦燕', '王致远', '乔双', '牟梓萱', '刘梦娴',
  '刘梦妍', '杨娜雅', '孙翊晴', '谭俊宇', '刘蒙伟', '侯超阳', '杨浩男', '郑皓轩',
  '兰兆宇'
];
console.log('names: ', names.length);

export default {
  data() {
    return {
      names,
      activeStars: Array(names.length).fill(false),
      starRows: [], // 每行星星的数组
    };
  },
  created() {
    this.distributeStars();
  },
  methods: {
    toggleStar(index) {
      this.$set(this.activeStars, index, !this.activeStars[index]);
    },
    distributeStars() {
      const rows = [9, 10, 12, 10, 9]; // 星星数量的分布，最上面和最下面行较少，中间行较多
      let currentIndex = 0;
      rows.forEach((count) => {
        this.starRows.push(this.names.slice(currentIndex, currentIndex + count));
        currentIndex += count;
      });
    },
    globalIndex(rowIndex, index) {
      // 计算全局索引
      let count = 0;
      for (let i = 0; i < rowIndex; i++) {
        count += this.starRows[i].length;
      }
      return count + index;
    }
  }
};

</script>

<style scoped>
/* 1vw = 2560px / 100 = 25.6px。 */
/* 要将像素值转换为 vw，可以使用 像素值 / 25.6 */

.container {
  margin-top: 2.34vw !important; /* 60px => 2.34vw */
}

.star-container {
  cursor: pointer;
  display: inline-block;
  margin: 0.78vw; /* 20px => 0.78vw */
  position: relative;
}

.star {
  width: 6.25vw; /* 160px => 6.25vw */
  height: 6.25vw; /* 保持宽高一致 */
  transition: opacity 0.3s;
}

.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-size: 0.63vw; /* 16px => 0.63vw */
  letter-spacing: 0.2vw; /* 5px => 0.2vw */
  padding: 0.2vw; /* 5px => 0.2vw */
  padding-left: 0.39vw; /* 10px => 0.39vw */
  font-weight: bold;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  text-shadow: 0.08vw 0.08vw 0.16vw rgba(0, 0, 0, 0.5); /* 2px => 0.08vw, 4px => 0.16vw */
  justify-content: center;
}

.name.active {
  color: black;
  text-shadow: 0.08vw 0.08vw 0.16vw rgba(80, 80, 80, 0.5); /* 同样使用 vw 单位 */
}

</style>
