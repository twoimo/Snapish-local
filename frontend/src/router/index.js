import { createRouter, createWebHistory } from "vue-router";
import FishResultWarning from "../views/FishResultWarning.vue";

const routes = [
  // ...existing routes...
  {
    path: "/fish-result-warning",
    name: "FishResultWarning",
    component: FishResultWarning,
  },
  // ...existing routes...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
