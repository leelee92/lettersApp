<template>
  <div>
    <div id="g-home">
      <p>Bienvenue {{ pseudo }}</p>

      <p>CHRONO : {{ compteur }} secondes</p>
    </div>
    <hr />
    <Tirage></Tirage>
    <hr />
    <MotJoueurA></MotJoueurA>
    <hr />
    <MotJoueurB></MotJoueurB>
    <hr />
    <button @click="leave">QUITTER</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tirage from "../components/Tirage";
import MotJoueurA from "../components/MotJoueurA";
import MotJoueurB from "../components/MotJoueurB";

export default {
  name: "Game",
  components: {
    Tirage,
    MotJoueurA,
    MotJoueurB,
  },

  created() {
    /**
     * Evenements socket
     */

    // joueur recoit la notification de fin du chronometre
    this.socket.on("s-arret-chrono", () => {
      clearInterval(this.setIntervalID);
      // envoi des resultats
      this.socket.emit(
        "c-envoi-resultat",
        this.pseudo,
        this.mot,
        this.tirage,
        this.partie
      );
    });

    // joueur recoit la notification des resultats
    this.socket.on("s-resultat-partie", (data) => {
      this.$router.replace({
        name: "Resultat",
        params: { message: data.message, score: data.score },
      });
    });
  },
  data() {
    return {
      compteur: 60,
      setIntervalID: "",
    };
  },
  computed: {
    ...mapState(["socket", "pseudo", "tirage", "mot", "partie"]),
  },
  watch: {
    tirage: function() {
      this.setIntervalID = setInterval(() => {
        this.compteur--;
      }, 1000);
    },
  },
  methods: {
    leave() {
      this.socket.emit("leave");
    },
  },
};
</script>

<style>
#g-home {
  font-weight: bold;
}
</style>
