<template>
  <div class="demo-container demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">默认</span>
        <rol-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"> </rol-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <rol-date-picker
          v-model="value2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          :shortcuts="shortcuts"
        >
        </rol-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">设置默认时间</span>
        <rol-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
        </rol-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import RolDatePicker from '@rol-ui/date-picker'

export default {
  name: 'date-time-picker',
  components: {
    RolDatePicker,
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      shortcuts: [
        {
          text: '今天',
          value: new Date(),
        },
        {
          text: '昨天',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        },
        {
          text: '一周前',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          })(),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.demo-date-picker {
  padding: 0;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    border-right: 1px solid #eff2f6;
    display: flex;

    .block {
      border-right: none;
    }
  }

  .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    flex: 1;
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
