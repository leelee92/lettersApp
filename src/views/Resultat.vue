<template>
  <div>
    <p>
      {{ message }}
    </p>
    <p>
      {{ score }}
    </p>
    <div id="resultat-nav">
      <button @click="close">FERMER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resultat",
  components: {},
  data() {
    return {};
  },
  props: ["message", "score"],
  methods: {
    close() {
      window.location.assign(process.env.BASE_URL);
    },
  },
};
</script>

<style>
p {
  margin-bottom: 20px;
}
</style>
