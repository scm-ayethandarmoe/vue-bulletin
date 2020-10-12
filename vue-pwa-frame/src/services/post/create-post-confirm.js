import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["postTitle", "postDescription"]),
  },
  methods: {
    confirmPost() {
      return this.$router.push({ name: "post-list" });
    },
  },
};
