const appRoutes = [
  {
    path: "/",
    name: "home",
    component: require("pages/Home").default,
  },
  {
    path: ":index/:teamName",
    name: "teams",
    component: require("pages/Teams").default,
  }
];

export default appRoutes;