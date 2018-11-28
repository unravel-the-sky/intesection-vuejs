<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
.appearing {
  animation: appear 1s ease-in-out;
  opacity: 1 !important;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
export default {
  name: "lazy-element",
  data() {
    return {
      isVisible: false,
      index: 0
    };
  },
  props: {
    visibleItems: {
      type: Array,
      required: true
    }
  },
  watch: {
    visibleItems() {
      this.visibleItems.forEach(index => {
        const item = document.getElementById(index);
        if (item.style.opacity == 0) {
          item.classList.add('appearing')
        //   console.log("this item is visible! ", index);
        }
      });
    }
  },
  mounted() {
    this.$slots.default.forEach(slot => {
      slot.elm.setAttribute("id", "slots_" + this.index++);
      slot.elm.style.opacity = 0;
      this.$emit("elementAdded", slot.elm);
    });
  }
};
</script>
