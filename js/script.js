import Projetos from "./projetos.js";
import Mobile from "./mobile.js";
import initFetchProjetos from "./fetch-projetos.js";

const mobile = new Mobile("#menu-mobile", "#nav-list");
mobile.init();

async function setupProjetos() {
  const urlAPI = "https://node-api-projetos.onrender.com";

  const carregou = await initFetchProjetos(
    urlAPI,
    "#slides",
    "#slide-description",
  );

  if (carregou) {
    const projetos = new Projetos(
      "#slides",
      "#slide-description",
      "#email",
      "#alert",
    );
    projetos.init();
  }
}

setupProjetos();
