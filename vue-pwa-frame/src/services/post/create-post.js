import { mapGetters } from "vuex";

export default {
  data() {
    return {
      valid: true,
      title: "",
      description: "",
    };
  },
  component: {
    ...mapGetters(["isLoggedIn", "postCreate"]),
  },
  methods: {
    createPost() {
      this.$store.commit("createpost", {
        title: this.title,
        description: this.description,
      });
      this.$router.push({ name: "create-post-confirm" });
    },
  },
};
