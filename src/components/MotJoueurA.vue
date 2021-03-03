<template>
  <div>
    <p id="ma-input">
      <label>
        Saisissez votre mot : <br />
        <input size="24" placeholder="" v-model="mot" />
      </label>
    </p>
    <p id="ma-score">
      Votre score :
      <br />
      {{ mot.length }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MotJoueurA",
  components: {},
  created() {},
  data() {
    return {
      mot: "",
    };
  },
  computed: {
    ...mapState(["socket"]),
  },
  watch: {
    mot: function() {
      this.socket.emit("c-action-lettre", this.mot.length);
      this.changeMot(this.mot);
    },
  },
  methods: {
    changeMot(mot) {
      this.$store.dispatch("changeMot", mot);
    },
  },
};
</script>

<style>
input {
  letter-spacing: 1em;
  margin-bottom: 10px;
}

#ma-input {
  background-color: #32a885;
}

#ma-score {
  background-color: #c9d4d2;
}
</style>
