<template>
  <div class="stationed">
    
  </div>
</template>
<script>
import {
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  XSwitch,
  Actionsheet,
  TransferDom,
  Confirm
} from "vux";

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    XSwitch,
    Cell,
    Actionsheet,
    Confirm
  },
  directives: {
    TransferDom
  },
  data() {
    return {
      icon:
        '<img slot="icon" width="20" style="display:inline-block;margin: 0 5px 0 -25px;vertical-align: middle;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">',
      tabIndex: 0,
      userInfo: {},
      portraitShow: false,
      portrait: {
        camera: '<label = for="file">拍照</label>',
        avatar: '<label = for="file">从相册中选择</label>'
      }
    };
  },
  created() {
    let self = this;
    this.$fetch("account/queryUserInfo.htm").then(response => {
      self.userInfo = response.data;
    });
  },
  methods: {
    changeTabIndex(index) {
      this.tabIndex = index;
    },
    queryUserInfo(response) {
      let self = this;
      this.$fetch("account/queryUserInfo.htm").then(response => {
        self.userInfo = response.data;
      });
    },
    portraitClick(key, item) {
      let self = this;
      var file = document.getElementById("file");
      file.accept = "image/*";
      file.capture = key;
      if (window.os.plus) {
        if (key == "camera") {
          var c = plus.camera.getCamera();
          c.captureImage(
            function(url) {
              plus.nativeUI.showWaiting("", {
                padlock: true
              });
              plus.zip.compressImage(
                {
                  src: url,
                  dst: url,
                  quality: 100,
                  overwrite: true,
                  width: "80px",
                  height: "80px"
                },
                function(i) {
                  plus.nativeUI.closeWaiting();
                  plus.io.resolveLocalFileSystemURL(i.target,function(e){
                    let Bitmap = new plus.nativeObj.Bitmap("Bitmap");
                    Bitmap.load(e.toURL(),function(e){
                      var dataURI = Bitmap.toBase64Data();
                      var byteString;
                      if (dataURI.split(',')[0].indexOf('base64') >= 0){
                        byteString = atob(dataURI.split(',')[1]);
                      }else{
                        byteString = unescape(dataURI.split(',')[1]);
                      }
                      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                      // write the bytes of the string to a typed array
                      var ia = new Uint8Array(byteString.length);
                      for (var i = 0; i < byteString.length; i++) {
                          ia[i] = byteString.charCodeAt(i);
                      }
                      var blob = new Blob([ia], {type:mimeString});
                      self.updateHeadImg(blob)
                    },function(e){
                      console.log('加载图片失败：'+JSON.stringify(e));
                    })
                  })
                  //self.updateHeadImg(i.target);
                },
                function(e) {
                  plus.nativeUI.closeWaiting();
                  self.$vux.toast.text("压缩失败，请重新上传图片");
                }
              );
            },
            function(error) {
              self.$vux.toast.text(error.message);
            },
            {
              filename: "_doc/head.jpg"
            }
          );
        } else {
          plus.gallery.pick(
            function(url) {
              if (0 != url.indexOf("file://")) {
                url = "file://" + url;
              }
              plus.nativeUI.showWaiting("", {
                padlock: true
              });
              plus.zip.compressImage(
                {
                  src: url,
                  dst: "_doc/head.jpg",
                  quality: 100,
                  overwrite: true,
                  width: "80px",
                  height: "80px"
                },
                function(i) {
                  plus.nativeUI.closeWaiting();
                  plus.io.resolveLocalFileSystemURL(i.target,function(e){
                    let Bitmap = new plus.nativeObj.Bitmap("Bitmap");
                    Bitmap.load(e.toURL(),function(e){
                      var dataURI = Bitmap.toBase64Data();
                      console.log(dataURI)
                      // self.$vux.confirm.show({
                      // title: "昵称",
                      // // showInput: true,
                      // placeholder: "设置昵称",
                      // content: dataURI
                      // })
                      prompt(dataURI);
                      var byteString;
                      if (dataURI.split(',')[0].indexOf('base64') >= 0){
                        byteString = atob(dataURI.split(',')[1]);
                      }else{
                        byteString = unescape(dataURI.split(',')[1]);
                      }
                      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                      // write the bytes of the string to a typed array
                      var ia = new Uint8Array(byteString.length);
                      for (var i = 0; i < byteString.length; i++) {
                          ia[i] = byteString.charCodeAt(i);
                      }
                      var blob = new Blob([ia], {type:mimeString});
                      self.updateHeadImg(blob)
                    },function(e){
                      console.log('加载图片失败：'+JSON.stringify(e));
                    })
                  })
                },
                function(e) {
                  plus.nativeUI.closeWaiting();
                  self.$vux.toast.text("压缩失败，请重新上传图片");
                }
              );
            },
            function(a) {},
            {
              filter: "image"
            }
          );
        }
      } else {
        document.getElementById("file").addEventListener("change", function() {
          self.updateHeadImg(this.files[0]);
        });
      }
    },
    updateHeadImg(value) {
      let self = this;
      var params = new FormData();
      var dataURI = 'data:image/jepg;base64,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';
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0){
        byteString = atob((dataURI.split(',')[1]));
      }else{
        byteString = unescape(dataURI.split(',')[1]);
      }
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([ia], {type:mimeString});
      params.append("img", blob);
      this.$post("account/updateHeadImg.htm", params).then(
        function(json) {
          self.$vux.toast.text(json.data)
          self.queryUserInfo();
        },
        function(json) {
          console.log("失败");
          console.log(json);
        }
      );
    },
    updateUserName() {
      let self = this;
      this.$vux.confirm.show({
        title: "昵称",
        placeholder: "设置昵称",
        content: "Content",
        value: this.userInfo.userName,
        inputAttrs: {
          value: this.userInfo.userName
        },
        showInput: true,
        onCancel() {},
        onConfirm(value) {
          var params = new URLSearchParams();
          params.append("userName", value);
          self.$post("account/updateUserName.htm", params).then(
            function(json) {
              self.$vux.toast.text(json.data)
              self.queryUserInfo();
            },
            function(json) {
              console.log("失败");
              console.log(json);
            }
          );
        }
      });
    }
  }
};
</script>
<style scoped>
.weui-tabbar__icon svg {
  width: 100%;
  height: 100%;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0 !important;
}
.head {
  margin: 15px 0;
}
.head > img {
  float: left;
  width: 75px;
  height: 75px;
  display: block;
  line-height: 75px;
  margin: 0 15px 0 25px;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-align: center;
}
.info {
  text-align: left;
  line-height: 75px;
}
p {
  margin: 0;
}
.weui-cell {
  padding: 0 5px;
}
</style>
