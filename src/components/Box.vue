<template>
  <div>
    <div class="box-thing">
      <div class="box-number">i am box {{number+1}}</div>
    </div>
  </div>
</template>

<style scoped>
.box-thing {
  background: green;
  height: 100%;
  position: relative;
  /* animation: appear 1s ease-in-out; */
}
.box-number {
  position: absolute;
  margin: auto;
  text-align: center;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background: rgb(175, 235, 163);
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "box",
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    this.$store.commit("updateBoxStatusId", "box_" + this.number);
  },
  computed: {
    ...mapGetters(["itemsInDisplay"]),

    isProductInDisplay() {
      if (this.itemsInDisplay.length === 0) return false;

      const isDisplayed = this.itemsInDisplay.includes("box_" + this.number);
      if (isDisplayed) {
        console.log("meee: ", this.number);
      }

      return isDisplayed;
    }
  },
  methods: {}
};
</script>
