<template>
  <div id="app">
    <boxes 
     :num=200>
    </boxes>
  </div>
</template>

<script>
import Boxes from './components/Boxes'

export default {
  name: 'app',
  components: {
    'boxes': Boxes
  }
}
</script>

<style>
</style>
