<template>
  <div id="t-home">
    Le tirage est constitué des lettres suivantes : <br />
    {{ tirageFormate }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Tirage",
  components: {},
  created() {
    /**
     * Evenements socket
     */

    // joueur recoit un tirage
    this.socket.on("s-envoi-tirage", (mot) => {
      this.setStoreTirage(mot);
      this.tirageFormate = mot.join("-");
    });
  },
  data() {
    return {
      tirageFormate: "",
    };
  },
  computed: {
    ...mapState(["socket", "tirage"]),
  },
  methods: {
    setStoreTirage(payload) {
      this.$store.dispatch("initializeTirage", payload);
    },
  },
};
</script>

<style>
#t-home {
  background-color: #32a885;
}
</style>
