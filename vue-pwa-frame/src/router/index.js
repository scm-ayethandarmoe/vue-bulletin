import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import CreatePost from "../pages/post/CreatePost";
import CreatePostConfirm from "../pages/post/CreatePostConfirm";
import UserList from "../pages/user/UserList";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/post/list",
    name: "post-list",
    component: PostList,
  },
  {
    path: "/user/list",
    name: "user-list",
    component: UserList,
  },
  {
    path: "/create/post",
    name: "create-post",
    component: CreatePost,
  },
  {
    path: "/confirm/create-post",
    name: "create-post-confirm",
    component: CreatePostConfirm,
  },
  {
    path: "/*",
    redirect: "/post/list",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.isLoggedIn;
  if (!loggedIn && to.name != "login") {
    return next("/login");
  }
  next();
});

export default router;
