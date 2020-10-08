<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   
    <van-nav-bar
      title="标题"
    />
     <router-view/>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace  icon="home-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item replace  icon="search" to="/toDo">待办</van-tabbar-item>
      <van-tabbar-item to="/workbench">
        <div class="workbench"> 
          <div class="workbench-img"></div>
          工作台
        </div>
      </van-tabbar-item>
      
      <van-tabbar-item replace  icon="friends-o" to="/application">应用</van-tabbar-item>
      <van-tabbar-item replace  icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FAFAFA;
  /* margin-top: 60px; */
}
.workbench{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -20px;
  font-size: 23px;
  color: #12ABEF;
}
.workbench-img{
  margin-bottom: 15px;
  width:73px;
  height:73px;
  border-radius: 50%;
  background: #12ABEF;
}
</style>
