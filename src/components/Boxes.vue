<template>
  <div class="box-holder">
      <lazy-load-stuff>
          <div v-for="(element, index) in num" :key="element.name" class="boxing">{{index+1}}</div>
        <!-- <box v-for="(element, index) in num" 
            :key="element.name" 
            :number="index" 
            :style="{'margin-left': Math.random()*1000 + 'px'}"
            class="boxing">
        </box> -->
      </lazy-load-stuff>
  </div>
</template>

<style scoped>
.box-holder {
    display: flex;
    /* justify-content: center;
    align-content: center;
    align-items: center; */
    flex-direction: column;
}
.boxing {
    width: 500px;
    height: 600px;
    margin: 40px;
}
</style>

<script>
import LazyLoadStuff from './LazyLoadParent'
import Box from './Box'

export default {
    name: 'boxes',
    props: {
        num: {
            type: Number,
            required: true,
            default: 10
        }
    },
    components: {
        'box': Box,
        'lazy-load-stuff': LazyLoadStuff
    }
}
</script>
