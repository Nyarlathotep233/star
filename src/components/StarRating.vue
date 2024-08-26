<template>
  <div class="container text-center mt-5">
    <div class="row">
      <div class="col-12">
        <div class="star-container" v-for="(name, index) in [...names,...names,...names,...names,...names,]" :key="index" @click="toggleStar(index)">
          <i class="fa fa-star star" :class="{ active: activeStars[index] }"></i>
          <span class="name">{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
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

<style>
.star-container {
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  position: relative;
}
.star {
  font-size: 60px;
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
