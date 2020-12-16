<template>
  <div class="demo-container">
    <rol-date-picker v-model="value1" type="date" placeholder="选择日期"></rol-date-picker>
    <rol-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期"
      :disabled-date="disabledDate"
      :shortcuts="shortcuts"
    >
    </rol-date-picker>
  </div>
  <div class="demo-container demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <rol-date-picker v-model="valuet1" type="week" format="gggg 第 ww 周" placeholder="选择周"></rol-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <rol-date-picker v-model="valuet2" type="month" placeholder="选择月"></rol-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <rol-date-picker v-model="valuet3" type="year" placeholder="选择年"></rol-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <rol-date-picker type="dates" v-model="valuet4" placeholder="选择一个或多个日期"></rol-date-picker>
      </div>
    </div>
  </div>
  <div class="demo-container demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">默认</span>
        <rol-date-picker
          v-model="valuer1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </rol-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import RolDatePicker from '@rol-ui/date-picker'
import dayjs from 'dayjs'

export default {
  name: 'basic',
  components: {
    RolDatePicker,
  },
  data() {
    return {
      value1: '',
      value2: '',
      valuet1: '',
      valuet2: '',
      valuet3: '',
      valuet4: '',
      valuer1: ['2018-01-01', '2018-02-11'],
      valuer2: '',
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: 'Today',
          value: new Date(),
        },
        {
          text: 'Yesterday',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        },
        {
          text: 'A week ago',
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

<style lang="scss">
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
