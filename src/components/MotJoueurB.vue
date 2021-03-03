<template>
  <div id="mb-home">
    <label> Score de l'adversaire : <br /> </label>
    {{ mot }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MotJoueurB",
  components: {},
  created() {
    this.socket.on("s-action-lettre", (data) => {
      this.mot = data;
    });
  },
  data() {
    return {
      mot: 0,
    };
  },
  computed: {
    ...mapState(["socket"]),
  },
};
</script>

<style>
#mb-home {
  background-color: #c9d4d2;
}
</style>
