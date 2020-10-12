import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
      dialogTitle: "",
      dialog: false,
      isDeleteDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Post Title",
          value: "title",
        },
        {
          text: "Post Desciption",
          value: "description",
        },
        {
          text: "Posted User",
          value: "created_user",
        },
        {
          text: "Operation",
          value: "operation",
        },
      ],
      postList: [],
      userList: [],
      showuserList: [],
      showList: [],
      title : "",
      description : "",
      postcreate: "",
    };
  },
 
  computed: {
    ...mapGetters(["isLoggedIn"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
    postUser() {
      let userList = this.userList;
      return this.postList.map(function (post) {
        var createdUser = userList.find(function (user) {
          return post.created_user_id == user.id;
        });
        post["created_user"] = createdUser.name;
        return post;
      });
    }
  },
  async beforeMount() {
    await this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
        this.showuserList = this.userList;
      })
      .catch((err) => {
        console.log(err);
      });
   
    await this.$axios
      .get("/post/list")
      .then((response) => {
        this.postList = response.data.post_list;
        this.showList = this.postList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    /**
     * This is to filter posts of datatable.
     * @returns void
     */
    filterPosts() {
      this.showList = this.postList.filter((post) => {
        return (
          post.title.includes(this.keyword) ||
          post.description.includes(this.keyword) ||
          post.created_user.includes(this.keyword)
        );
      });
    },
    postDetail(id) {
      this.dialog = true;
      let detailpost = this.postList.find(post=> {
        return post.id == id
      })
      this.title = detailpost.title,
      this.description = detailpost.description,
      this.postcreate = detailpost.created_user
    },
    postCreate() {
      return this.$router.push({ path: "/create/post"})
    }
  },
};
