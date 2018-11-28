<template>
  <div>
    <lazy-element @elementAdded="updateElementStatusId" :visibleItems="itemsInDisplay">
      <slot></slot>
    </lazy-element>
  </div>
</template>

<style scoped>
</style>

<script>
import LazyLoadElement from "./LazyLoadElement";

export default {
  name: "lazy-loader",
  components: {
    "lazy-element": LazyLoadElement
  },
  data() {
    return {
      observer: new IntersectionObserver(this.handleIntersection),
      itemsInDisplay: [],
      itemsInDisplayAsSet: new Set()
    };
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.itemsInDisplayAsSet.add(entry.target.id);
        }
      });
      this.itemsInDisplay = Array.from(this.itemsInDisplayAsSet);
    },
    updateElementStatusId(elementStatus) {
      if (elementStatus) this.observer.observe(elementStatus);
    }
  }
};
</script>
