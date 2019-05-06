<template>
  <div v-show="visiable" class="preview-wrap" @click="close">
    <div class="preview-list">
      <img
        v-for="(item,index) in picList"
        v-if="index === current && !loading"
        :key="index"
        :src="item"
        :data-key="index">
      <i v-show="loading" class="el-icon-loading"></i>
    </div>
    <i v-if="picList.length !== 1" class="contorl el-icon-arrow-left" @click.stop="prev"></i>
    <i v-if="picList.length !== 1" class="contorl el-icon-arrow-right" @click.stop="next"></i>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        visiable : false,
        current: 0,
        picList: [],
        loading: false,
        timer: null
      }
    },
    methods:{
      open(e){
        e.target.parentNode.querySelectorAll('img').forEach(L => {
          this.picList.push(L.src);
        });
        this.visiable = true;
      },
      close(){
        this.picList = [];
        this.visiable = false;
      },
      prev() {
        this.showLoading();
        if(this.current === 0){
          this.current = this.picList.length - 1;
        }else {
          this.current -= 1;
        }
      },
      next() {
        this.showLoading();
        if(this.current === this.picList.length - 1){
          this.current = 0;
        }else {
          this.current += 1;
        }
      },
      showLoading() {
        clearTimeout(this.timer);
        this.loading = true;
        this.timer = setTimeout(() => {
          this.loading = false;
        },300)
      }
    }
  }
</script>

<style lang="scss">
  .preview-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.9);
    .preview-list {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 80vw;
        max-height: 100vh;
        background: #fff;
      }
      .el-icon-loading {
        color: #fff;
        font-size: 30px;
      }
    }
    .contorl {
      position: absolute;
      top: 48vh;
      color: #fff;
      font-size: 40px;
      cursor: pointer;
      &.el-icon-arrow-left {
        left: 50px;
      }
      &.el-icon-arrow-right {
        right: 50px;
      }
    }
  }
</style>
