import { navigateTo } from "../router/router";

export const loginPage = (app) => {
  app.innerHTML = `
    <div>
      <h1>Login</h1>

      <button id="loginBtn">
        Entrar
      </button>
    </div>
  `;

  document
    .querySelector("#loginBtn")
    .addEventListener("click", () => {
      navigateTo("/dashboard");
    });
};