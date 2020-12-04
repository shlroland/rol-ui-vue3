<template>
  <!-- <div class="demo-container">
    <rol-radio v-model="radio" label="1" disabled>备选项</rol-radio>
    <rol-radio v-model="radio" label="2" disabled>备选项</rol-radio>
  </div>-->
  <!-- <div class="demo-container">
    <rol-radio-group v-model="radio">
      <rol-radio :label="3">备选项</rol-radio>
      <rol-radio :label="6">备选项</rol-radio>
      <rol-radio :label="9">备选项</rol-radio>
    </rol-radio-group>
  </div>-->
  <div class="demo-container">
    <!-- <div>
      <rol-radio-group v-model="radio1">
        <rol-radio-button label="上海"></rol-radio-button>
        <rol-radio-button label="北京"></rol-radio-button>
        <rol-radio-button label="广州"></rol-radio-button>
        <rol-radio-button label="深圳"></rol-radio-button>
      </rol-radio-group>
    </div>
    <div style="margin-top: 20px">
      <rol-radio-group v-model="radio2" size="medium">
        <rol-radio-button label="上海"></rol-radio-button>
        <rol-radio-button label="北京"></rol-radio-button>
        <rol-radio-button label="广州"></rol-radio-button>
        <rol-radio-button label="深圳"></rol-radio-button>
      </rol-radio-group>
    </div>
    <div style="margin-top: 20px">
      <rol-radio-group v-model="radio3" size="small">
        <rol-radio-button label="上海"></rol-radio-button>
        <rol-radio-button label="北京" disabled></rol-radio-button>
        <rol-radio-button label="广州"></rol-radio-button>
        <rol-radio-button label="深圳"></rol-radio-button>
      </rol-radio-group>
    </div>-->
    <div style="margin-top: 20px">
      <rol-radio-group v-model="radio4" disabled size="mini">
        <rol-radio-button label="上海"></rol-radio-button>
        <rol-radio-button label="北京"></rol-radio-button>
        <rol-radio-button label="广州"></rol-radio-button>
        <rol-radio-button label="深圳"></rol-radio-button>
      </rol-radio-group>
    </div>
  </div>
  <div class="demo-container">
    <div>
      <rol-radio v-model="radio1" label="1" border>备选项1</rol-radio>
      <rol-radio v-model="radio1" label="2" border>备选项2</rol-radio>
    </div>
    <div style="margin-top: 20px">
      <rol-radio v-model="radio2" label="1" border size="medium">备选项1</rol-radio>
      <rol-radio v-model="radio2" label="2" border size="medium">备选项2</rol-radio>
    </div>
    <div style="margin-top: 20px">
      <rol-radio-group v-model="radio3" size="small">
        <rol-radio label="1" border>备选项1</rol-radio>
        <rol-radio label="2" border disabled>备选项2</rol-radio>
      </rol-radio-group>
    </div>
    <div style="margin-top: 20px">
      <rol-radio-group v-model="radio4" size="mini" disabled>
        <rol-radio label="1" border>备选项1</rol-radio>
        <rol-radio label="2" border>备选项2</rol-radio>
      </rol-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Radio as RolRadio, RadioGroup as RolRadioGroup, RadioButton as RolRadioButton } from '@rol-ui/radio'

export default {
  components: {
    RolRadio,
    RolRadioGroup,
    RolRadioButton,
  },
  data() {
    return {
      radio: '1',
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
    }
  },
  methods: {},
}
</script>

<style>
.demo-container .rol-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
