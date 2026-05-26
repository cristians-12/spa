import "./style.css";
import { router } from "./router/router";

window.addEventListener("DOMContentLoaded", router);

window.addEventListener("popstate", router);
