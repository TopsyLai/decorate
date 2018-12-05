<template>
  <div class="personal">
      <div class="head">
        <img @click="portraitShow=true" :src="'http://39.104.53.137:8080/'+userInfo.imgSrc" alt="头像">
        <div class="info" @click="updateUserName">
          <p>{{userInfo.userName}}</p>
        </div>
      </div>
    
    <actionsheet v-model="portraitShow" @on-click-menu="portraitClick" :menus="portrait" show-cancel></actionsheet>
		
    <group>
      <x-switch  :title="icon+'接活'"><span></span><span></span></x-switch>
      <cell title="工人入驻/修改"  is-link value-align="left">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
      <cell :title="userInfo.phone"  is-link value-align="left">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
      <cell title="实名认证"  is-link value-align="left">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
      <cell title="累计评价"  is-link value-align="left">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
      <cell title="待办"  is-link value-align="left">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
      <cell title="关于我们"  is-link value-align="left">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell>
	  </group>
    <input type="file" name="personal" id="file"  style="position: absolute;z-index: -1;opacity: 0;left: -500px;width: 1px;height: 1px;top: -500px;" >
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
      params.append("img", value);
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
