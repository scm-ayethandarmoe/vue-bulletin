import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
      dialogTitle: "",
      dialog: false,
      searchText: "",
      isDeleteDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "User Name",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Created User",
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
      name: "",
      email: "",
      address: "",
      phone: "",
      dob: "",
      createduser: "",
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
    createduserName() {
      let userlist = this.userList;
      return this.userList.map(function(user) {
        var createdUser = userlist.find(function(user_name) {
          return user.created_user_id == user_name.id;
        });
        user["created_user"] = createdUser.name;
        return user;
      });
    },
  },
  beforeMount() {
    this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
        this.showuserList = this.userList;
      })
      .catch((err) => {
        console.log(err);
      });

    this.$axios
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
    filterUser() {
      this.showuserList = this.userList.filter((user) => {
        return (
          user.name.includes(this.keyword) ||
          user.email.includes(this.keyword) ||
          user.created_user.includes(this.keyword)
        );
      });
    },
    /**
     * if click user name show user detail
     * @param {*} id
     */
    detailUser(id) {
      this.dialog = true;
      let result = this.userList.find((userdetail) => {
        return userdetail.id == id;
      });
      (this.name = result.name),
        (this.email = result.email),
        (this.address = result.address),
        (this.phone = result.phone),
        (this.dob = result.dob),
        (this.createduser = result.created_user);
    },
  },
};
