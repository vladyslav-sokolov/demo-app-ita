<template>
  <div class="container">
    <div>
      <h1 class="title">Demo</h1>
      <div class="links">
        <v-text-field v-model="logs" outlined></v-text-field>
        <v-btn outlined @click="log" large color="primary">send logs</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: "Demo error log",
    };
  },
  methods: {
    async log() {
      await this.$axios
        .$post(this.$config.baseUrl + "/api/logs", {
          message: this.logs,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
