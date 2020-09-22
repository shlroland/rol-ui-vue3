<template>
  <div class="demo-layout">
    <row>
      <r-col :span="24">
        <div class="grid-content bg-grey-dark"></div>
      </r-col>
    </row>
    <row>
      <r-col :span="12"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="12"><div class="grid-content bg-grey-light"></div></r-col>
    </row>
    <row>
      <r-col :span="8"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="8"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="8"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
    </row>
    <row>
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey-light"></div></r-col>
    </row>
  </div>
  <div class="demo-layout">
    <row :gutter="20">
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
    </row>
  </div>

  <div class="demo-layout">
    <row :gutter="20">
      <r-col :span="16"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="8"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row :gutter="20">
      <r-col :span="8"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="8"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row :gutter="20">
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="16"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-grey"></div></r-col>
    </row>
  </div>
  <div class="demo-layout">
    <row :gutter="10">
      <r-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-grey"></div></r-col>
      <r-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-grey"></div></r-col>
      <r-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-grey-light"></div></r-col>
    </row>
  </div>
  <div class="demo-layout">
    <row type="flex" class="row-bg">
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row type="flex" class="row-bg" justify="center">
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row type="flex" class="row-bg" justify="end">
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row type="flex" class="row-bg" justify="space-between">
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
    </row>
    <row type="flex" class="row-bg" justify="space-around">
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-grey"></div></r-col>
    </row>
  </div>
</template>

<script>
import { Row, RCol } from '@rol-ui/grid'
export default {
  components: {
    Row,
    RCol,
  },
}
</script>

<style lang="scss">
.demo-layout {
  margin-bottom: 100px;

  .rol-row {
    margin-bottom: 20px;
    .rol-col {
      border-radius: 4px;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .bg-grey-dark {
      background-color: hsl(0, 0%, 71%);
    }
    .bg-grey {
      background-color: hsl(0, 0%, 86%);
    }
    .bg-grey-light {
      background-color: hsl(0, 0%, 93%);
    }
  }
}
</style>
