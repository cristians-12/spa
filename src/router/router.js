import { loginPage } from "../pages/login";
import { dashboardPage } from "../pages/dashboard";
import { adminPage } from "../pages/admin";
import { userProfile } from "../pages/profile";

const routes = {
  "/": loginPage,
  "/dashboard": dashboardPage,
  "/admin": adminPage,
  "/adm": loginPage,
  "/profile": userProfile,
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = async () => {
  const app = document.querySelector("#app");

  const path = window.location.pathname;
  console.log(path);
  
  const page = routes[path];
  
  if (!page) {
    app.innerHTML = "<h1>404</h1>";
    return;
  }

  await page(app);
};