<template>
  
</template>

<script>
//请求回调统一处理判断
export callBack(response) {
  this.userInfo = {
    name: "游客"
  };

  if (response.data.code == 6000) {
    router.push({
      path: "/login",
      querry: {
        redirect: router.currentRoute.fullPath
      } //从哪个页面跳转
    });
    return false;
  } else if (response.data.code == 9999) {
    Vue.$vux.toast.text(response.data.errorMsg);
    reject(response.data);
  } else {
    resolve(response.data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
