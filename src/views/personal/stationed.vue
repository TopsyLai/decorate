<template>
  <div class="stationed">
    <group label-align="justify" label-width="5.5em" label-margin-right="2em">
      <flexbox>
      <flexbox-item :span="11/12" >
        <popup-picker title="已工作年限" :data="workAgeList" v-model="workAge" @on-change="changeTabIndex" placeholder="请选择年份">
        </popup-picker>
      </flexbox-item>
      <flexbox-item>年</flexbox-item>
    </flexbox>

      <flexbox>
        <flexbox-item>
          <cell title="角色" @click.native="roleBoxShow=true" :value="roleName"></cell>

        </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item :span="7/12" >
        <x-input title='期望金额' placeholder="请输入金额" type="tel"></x-input>
      </flexbox-item>
      <flexbox-item>
        <popup-picker :data="unitList" v-model="unit" placeholder="期望金额单位">
        </popup-picker>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <x-textarea title="自我描述" placeholder="简介 简单描述自己的特长及其他擅长的技能" :show-counter="false" :height="200" :rows="8" :cols="30"></x-textarea>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <popup-picker :data="addressData" title="地址" @on-shadow-change="changeAddressData"  v-model="regionId" :columns="3" :show-name='true' ></popup-picker>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>

      </flexbox-item>
    </flexbox>
    <!-- <cell-form-preview :list="role"></cell-form-preview> -->
    <!-- <popup-radio multiple title="角色" :options="roleList" v-model="role" placeholder="请选择您的角色定位"></popup-radio> -->
    </group>

    <div v-transfer-dom>
      <popup v-model="roleBoxShow" position="bottom" max-height="50%">
        <group gutter="0">
          <checklist label-position="left" :options="roleList" @on-change="change" v-model="role" ></checklist>
        </group>
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
  CellFormPreview,
  Checklist,
  XInput,
  XTextarea,
  XAddress
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
    CellFormPreview,
    Checklist,
    XInput,
    XTextarea,
    XAddress
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
      roleBoxShow: false,
      workAge: [],
      workAgeList: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      role: [],
      roleName: [],
      roleList: ["电工", "木工", "油漆工"],
      unit: [],
      unitList: [["元/平米","元/小时","元/天","元/月"]],
      expectAmount: "",
      shiningPoint: "",
      addressData: [],
      UserTypeList: {},
      UserRoleList: [],
      regionId: [],
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
      let roleList = response.data;
      var arr = [];
      for (let k in roleList) {
        let data = {
          'value': roleList[k],
          'key': k
        };
        arr.push(data);
      }
      self.roleList = arr;
    });
    this.$fetch("common/getPayUnitList.htm").then(response => {
      self.unitList = [response.data];
    });
      this.$fetch("common/queryRegionView.htm").then(response => {
        for (let k =0 ;k<response.data.length;k++) {
          response.data[k].value = response.data[k].id+''
        }
        self.addressData = [response.data];
        // self.$set(self.addressData,0,response.data);
        for (let k =0 ;k<response.data[0].citys.length;k++) {
          response.data[0].citys[k].value = response.data[0].citys[k].id+''
        }
        self.addressData[1] = response.data[0].citys;
        //self.$set(self.addressData,1,response.data[0].citys);
        for (let k =0 ;k<response.data[0].citys[0].countys.length;k++) {
          response.data[0].citys[0].countys[k].value = response.data[0].citys[0].countys[k].id+''
        }
        self.addressData[2] = response.data[0].citys[0].countys;
        //self.$set(self.addressData,2,response.data[0].citys[0].countys);
        // self.queryCityListByProvince(response.data[0])
      });
  },
  methods: {
    changeTabIndex(index) {
      this.tabIndex = index;
    },
    queryCountyListByCity(city,county){
      let self = this;
      for (let k =0 ;k<self.addressData[0][city].citys[county].countys.length;k++) {
        self.addressData[0][city].citys[county].countys[k].value = self.addressData[0][city].citys[county].countys[k].id+''
      }
      self.$set(self.regionId,2,self.addressData[0][city].citys[county].countys[0].value);
      self.$set(self.addressData,2,self.addressData[0][city].citys[county].countys);
    },
    changeAddressData(item,name,xxx){
      let self = this;
      self.$set(self,'regionId',item);
      for (let k =0 ;k<self.addressData[0].length;k++) {
        if(self.addressData[0][k].id==item[0]){
          if(self.addressData[1][0].id==self.addressData[0][k].citys[0].id){
            for (let j =0 ;j<self.addressData[1].length;j++) {
              if(self.addressData[1][j].id==item[1]){
                if(self.addressData[2][0].id==self.addressData[0][k].citys[j].countys[0].id){
                  return false;
                }else{
                  self.queryCountyListByCity(k,j)
                }
                return
              }
            }
          }else{
            self.queryCityListByProvince(k,0)
            return
          }
        }
      }
    },
    queryCityListByProvince(city,county){
      let self = this;
      if(self.addressData[1][0].id==self.addressData[0][city].citys[0].id){
        return false;
      }else{
        for (let k =0 ;k<self.addressData[0][city].citys.length;k++) {
          self.addressData[0][city].citys[k].value = self.addressData[0][city].citys[k].id+''
        }
        self.$set(self.regionId,1,self.addressData[0][city].citys[0].value);
        self.$set(self.addressData,1,self.addressData[0][city].citys);
      }
      if(county==0){
        self.queryCountyListByCity(city,county)
      }
    },
    change(value, label){
      if(label.length==0){
        this.roleName = '请选择您的角色定位';
      }else{
        this.roleName = label.toString();
      }
    },
    skill() {
      let self = this;
      let params = new FormData();
      params.append("workAge", self.workAge); //工人工作年限 【0~10】下拉选
      params.append("role", self.role); //用户角色 做成下拉选 或者其他 此字段现在不确定 可能要做成多选
      params.append("expectAmount", self.expectAmount); //期望金额
      params.append("unit", self.unit); //期望金额单位 P("元/平米"),	X("元/小时"), T("元/天"), Y("元/月");
      params.append("shiningPoint", self.shiningPoint); //简介 简单描述自己的特长及其他擅长的技能
      params.append("regionId", self.regionId); //期望工作地id shiningPoint
      self.$post("skill/addSkill.htm", params).then(
        function(json) {
          self.$vux.toast.text(json.data);
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
