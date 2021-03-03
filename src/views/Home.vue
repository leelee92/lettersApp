<template>
  <div class="home">
    <form @submit="submit">
      <label id="nom">
        Pseudo :
        <input type="text" id="nom" v-model="nom" />
      </label>
      <div id="home-message">
        <p v-if="message.attente">Attente du second joueur...</p>
        <p v-if="message.encours">Partie en cours, veuillez réessayer !</p>
        <p v-if="message.pseudo">Pseudo deja pris, essayez en un autre !</p>
      </div>
      <div id="home-nav">
        <button :disabled="!bouton">JOUER</button>
        <button v-if="!bouton" @click="leave">QUITTER</button>
      </div>
    </form>
    <div>
      Scores passés :
      <p v-for="element in scores" :key="element._id">
        {{ element._id | date }} <br />
        {{ element.infos[0] }} VS {{ element.infos[1] }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import socket from "../socket.js";
import api from "../axios";

export default {
  name: "Home",
  components: {},
  created() {
    api()
      .get("/scores")
      .then((result) => {
        this.scores = result.data;
      });

    /**
     * Evenements socket
     */

    socket.on("connect", () => {
      this.setStoreSocket(socket);

      // joueur redirigé vers la partie
      socket.on("s-redirige-vers-la-partie", (numeroPartie, pseudo) => {
        this.setStorePseudo(pseudo);
        this.setStorePartie(numeroPartie);
        this.$router.replace({
          name: "Game",
        });
      });

      socket.on("s-information-queue", (data) => {
        if (data.code < 100) {
          this.message.attente = true;
          this.bouton = false;
        } else this.message.encours = true;
        console.log(data.message);
      });
    });
  },
  data() {
    return {
      nom: "",
      scores: "",
      message: {
        attente: false,
        encours: false,
        pseudo: false,
      },
      bouton: true,
    };
  },
  computed: {
    ...mapState(["pseudo"]),
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.message.encours = false;
      this.message.pseudo = false;
      // joueur demande a rejoindre une partie
      this.checkPseudo(this.nom).then((result) => {
        if (result.data != "error") {
          socket.emit("c-demande-partie", result.data);
        } else {
          this.message.pseudo = true;
        }
      });
    },
    setStoreSocket(socket) {
      this.$store.dispatch("initializeSock", socket);
    },
    setStorePseudo(pseudo) {
      this.$store.dispatch("initializePseudo", pseudo);
    },
    setStorePartie(partie) {
      this.$store.dispatch("initializePartie", partie);
    },
    checkPseudo(nom) {
      return api().post("/check", { pseudo: nom });
    },
    leave() {
      window.location.assign(process.env.BASE_URL);
    },
  },
  filters: {
    date: function(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

<style>
div {
  margin-bottom: 20px;
}
</style>
