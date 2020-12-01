<template>
  <!-- <div class="demo-container">
    <rol-checkbox v-model="checked" @change="handleChange">备选项</rol-checkbox>
  </div>
  <div class="demo-container">
    <rol-checkbox v-model="checked1" disabled>备选项1</rol-checkbox>
    <rol-checkbox v-model="checked2" disabled>备选项</rol-checkbox>
  </div>-->
  <!-- <div class="demo-contaier">
    <rol-checkbox-group v-model="checkList">
      <rol-checkbox label="复选框 A"></rol-checkbox>
      <rol-checkbox label="复选框 B"></rol-checkbox>
      <rol-checkbox label="复选框 C"></rol-checkbox>
      <rol-checkbox label="禁用" disabled></rol-checkbox>
      <rol-checkbox label="选中且禁用" disabled></rol-checkbox>
    </rol-checkbox-group>
  </div>-->
  <!-- <div class="demo-container">
    <rol-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</rol-checkbox>
    <div style="margin: 15px 0;"></div>
    <rol-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <rol-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</rol-checkbox>
    </rol-checkbox-group>
  </div>-->
  <!-- <div class="demo-container">
    <rol-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <rol-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</rol-checkbox>
    </rol-checkbox-group>
  </div>-->
  <div class="demo-container">
    <rol-checkbox v-model="checked1" label="备选项1" border></rol-checkbox>
    <rol-checkbox v-model="checked2" label="备选项2" border></rol-checkbox>
  </div>
  <div style="margin-top: 20px">
    <rol-checkbox v-model="checked3" label="备选项1" border size="medium"></rol-checkbox>
    <rol-checkbox v-model="checked4" label="备选项2" border size="medium"></rol-checkbox>
  </div>
  <div style="margin-top: 20px">
    <rol-checkbox-group v-model="checkboxGroup1" size="small">
      <rol-checkbox label="备选项1" border></rol-checkbox>
      <rol-checkbox label="备选项2" border disabled></rol-checkbox>
    </rol-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <rol-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <rol-checkbox label="备选项1" border></rol-checkbox>
      <rol-checkbox label="备选项2" border></rol-checkbox>
    </rol-checkbox-group>
  </div>
</template>

<script>
import { RCol, Row } from '@rol-ui/grid'
import { Checkbox as RolCheckbox,CheckboxGroup as RolCheckboxGroup } from '@rol-ui/checkbox'

const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  components: {
    RolCheckbox,
    RolCheckboxGroup
  },
  data(){
    return {
      // checked: true,
      // checked1: true,
      // checked2: true,
      // checkList: ['选中且禁用','复选框 A'],
      // checkAll: false,
      // checkedCities: ['上海', '北京'],
      // cities: cityOptions,
      // isIndeterminate: true
       checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
    }
  },
  methods: {
    handleChange(value,event){
      console.log(value,event)
    },
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-card {
  width: 480px;
}
</style>
