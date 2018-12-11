<template>
  <div class="stationed">
    <group>
      <flexbox>
      <flexbox-item :span="11/12" >
        <popup-picker title="已工作年限" :data="workAgeList" v-model="workAge" @on-change="changeTabIndex" placeholder="请选择年份">
        </popup-picker>
      </flexbox-item>
      <flexbox-item>年</flexbox-item>
    </flexbox>
    <cell title="角色" value="请选择您的角色定位"></cell>
    <cell-form-preview :list="role"></cell-form-preview>
    <!-- <popup-radio multiple title="角色" :options="roleList" v-model="role" placeholder="请选择您的角色定位"></popup-radio> -->
    </group>

    <div v-transfer-dom>
      <popup v-model="show13" position="bottom" max-height="50%">
        <group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="show13 = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>

  </div>
</template>
<script>
import {
  PopupRadio,
  TabbarItem,
  Group,
  Cell,
  XSwitch,
  Actionsheet,
  TransferDom,
  Confirm,
  PopupPicker,
  Flexbox,
  FlexboxItem,
  Popup,
  CellFormPreview 
} from "vux";

export default {
  components: {
    PopupRadio,
    TabbarItem,
    Group,
    XSwitch,
    Cell,
    Actionsheet,
    Confirm,
    PopupPicker,
    Flexbox,
    FlexboxItem,
    Popup,
    CellFormPreview 
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
      workAge: [],
      workAgeList: [[0,1,2,3,4,5,6,7,8,9,10]],
      role: [],
      roleList: ['电工','木工','油漆工'],
      expectAmount: '',
      unit: '',
      shiningPoint: '',
      UserTypeList: {},
      UserRoleList: [],
      regionId: '',
      portrait: {
        camera: '<label = for="file">拍照</label>',
        avatar: '<label = for="file">从相册中选择</label>'
      }
    };
  },
  created() {
    let self = this;
    this.$fetch("common/getUserTypeList.htm").then(response => {
      self.UserTypeList = response.data;
    });
    this.$fetch("common/getUserRoleList.htm").then(response => {
      self.roleList = response.data;
    });
    
  },
  methods: {
    changeTabIndex(index) {
      this.tabIndex = index;
    },
    skill() {
      let self = this;
      let params = new FormData();
      params.append("workAge", self.workAge);//工人工作年限 【0~10】下拉选
      params.append("role", self.role);//用户角色 做成下拉选 或者其他 此字段现在不确定 可能要做成多选
      params.append("expectAmount", self.expectAmount);//期望金额
      params.append("unit", self.unit);//期望金额单位 P("元/平米"),	X("元/小时"), T("元/天"), Y("元/月");
      params.append("shiningPoint", self.shiningPoint);//简介 简单描述自己的特长及其他擅长的技能
      params.append("regionId", self.regionId);//期望工作地id shiningPoint 
      self.$post("skill/addSkill.htm", params).then(
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
