import Items from "../pages/items";
import Content from "../pages/content";

const routes = [
  { path: "/", component: Items, exact: true },
  { path: "/content", component: Content },
];

export default routes;
