import Card from "../components/card";
import { fetchApi } from "../functions/fetch";
import { navigateTo } from "../router/router";

export const dashboardPage = async (app) => {

  const { results: personajes } = await fetchApi('character');

  app.innerHTML = `
    <div>
      <h1>Dashboard</h1>

      <div class='flex flex-wrap'>
        ${personajes.map((personaje) => (
    Card(personaje)
  )).join("")
    }
      </div>

      <button id="adminBtn">
        Admin
      </button>
    </div>
  `;

  document
    .querySelector("#adminBtn")
    .addEventListener("click", () => {
      navigateTo("/admin");
    });
};