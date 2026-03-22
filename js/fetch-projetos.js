export default async function initFetchProjetos(url, targetSlide, targetDesc) {
  const slidesUl = document.querySelector(targetSlide);
  const descContainer = document.querySelector(targetDesc);

  function createProjetoSlide(projeto) {
    const li = document.createElement("li");

    li.innerHTML = `
    <img src="${projeto.imagem}" alt="${projeto.nome}" onerror="this.src='/img/fallback.png'" >
    <div class="slide-text-mobile">
      <h3><a href="${projeto.url}" target="_blank">${projeto.nome}</a></h3>
      <p>${projeto.descricao || "Sem descrição."}</p>
    </div>
    `;
    return li;
  }

  function createProjetoDesc(projeto, index) {
    const div = document.createElement("div");
    div.id = `projeto${index + 1}`;
    div.innerHTML = `
    <h3><a href="${projeto.url}" target="_blank">${projeto.nome}</a></h3>
      <p>${projeto.descricao || "Sem descrição."}</p>
      `;
    return div;
  }
  try {
    const response = await fetch(url);
    const projetosJSON = await response.json();

    slidesUl.innerHTML = "";
    descContainer.innerHTML = "";

    projetosJSON.forEach((projeto, index) => {
      slidesUl.appendChild(createProjetoSlide(projeto));
      descContainer.appendChild(createProjetoDesc(projeto, index));
    });
    return true;
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    return false;
  }
}
