<template>
  <div>
    <!-- Create a tweet -->
    <form @submit.prevent="createTweet">
      <input type="text" v-model="text" />
      <button type="submit">Create</button>
    </form>

    <!-- Show all tweets -->
    <div v-for="tweet in tweets" :key="tweet.text">
      {{ tweet.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
      tweets: [],
    };
  },
  methods: {
    getTweets() {
      fetch("http://localhost:1337/tweets")
        .then((res) => res.json())
        .then((data) => (this.tweets = data.tweets));
    },
    createTweet() {
      fetch("http://localhost:1337/tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: this.text }),
      }).then(() => {
        this.text = '';
        this.getTweets();
      });
    },
  },
  mounted() {
    this.getTweets();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
