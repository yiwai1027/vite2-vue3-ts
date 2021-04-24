<template>
  <div>123</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../../utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((res: Object) => {
        console.log('res: ', res)
      })
      .catch((err: Object) => {
        console.log('err: ', err)
      })
  }
})
</script>
