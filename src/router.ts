import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
// import SwitchDemo from "./components/SwitchDemo.vue";
// import DialogDemo from "./components/DialogDemo.vue";
// import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./views/Doc.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        // { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        // { path: "dialog", component: DialogDemo },
        // { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});