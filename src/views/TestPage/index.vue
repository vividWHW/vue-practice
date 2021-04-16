<template>
  <div>
    first name:
    <el-input
      placeholder="请输入内容"
      v-model="userInfo.firstName"
      clearable>
    </el-input>
    last name:
    <el-input
      placeholder="请输入内容"
      v-model="userInfo.lastName"
      clearable>
    </el-input>
    birthday:
    <el-select v-model="userInfo.birthMonth" placeholder="请选择">
      <el-option
        v-for="item in month"
        :key="item.code"
        :label="item.value"
        :value="item.code">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
      userInfo: {
        firstName: '',
        lastName: '',
        birthMonth: 1,
        birthDay: 1
      },
      month: [
        {
          code: 1,
          value: 'January',
          day: 31
        }, {
          code: 2,
          value: 'February',
          day: 29
        }, {
          code: 3,
          value: 'Match',
          day: 31
        }, {
          code: 4,
          value: 'April',
          day: 30
        }, {
          code: 5,
          value: 'May',
          day: 31
        }, {
          code: 6,
          value: 'June',
          day: 30
        }, {
          code: 7,
          value: 'July',
          day: 31
        }, {
          code: 8,
          value: 'August',
          day: 31
        }, {
          code: 9,
          value: 'September',
          day: 30
        }, {
          code: 10,
          value: 'October',
          day: 31
        }, {
          code: 11,
          value: 'November',
          day: 30
        }, {
          code: 12,
          value: 'December',
          day: 31
        },
      ]
    };
  }
};
</script>

<style>

</style>
