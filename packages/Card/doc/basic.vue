<template>
  <div class="demo-container">
    <Card class="box-card">
      <template #header>
        <div class="box-header">
          <span>卡片名称</span>
          <Button type="link">操作按钮</Button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </Card>
  </div>
  <div class="demo-container">
    <Card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </Card>
  </div>
  <div class="demo-contaier">
    <Row :gutter="12">
      <RCol :span="8">
        <Card shadow="always">
          总是显示
        </Card>
      </RCol>
      <RCol :span="8">
        <Card shadow="hover">
          鼠标悬浮时显示
        </Card>
      </RCol>
      <RCol :span="8">
        <Card shadow="never">
          从不显示
        </Card>
      </RCol>
    </Row>
  </div>
</template>

<script>
import Card from '@rol-ui/card'
import { Button } from '@rol-ui/button'
import { Col as RCol, Row } from '@rol-ui/grid'
export default {
  components: {
    Card,
    Button,
    RCol,
    Row,
  },
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
