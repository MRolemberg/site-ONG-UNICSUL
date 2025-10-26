// Função principal para simular a navegação
function navigate(page) {
  const content = document.getElementById("page-content");
  let templateId;

  switch (page) {
    case "index":
      templateId = "index-template";
      break;
    case "projetos":
      templateId = "projetos-template";
      break;
    case "cadastro":
      templateId = "cadastro-template";
      break;
    default:
      templateId = "index-template";
  }

  content.innerHTML = "";

  const template = document.getElementById(templateId);
  if (template) {
    // Clona o conteúdo do template e injeta na página
    const clone = document.importNode(template.content, true);
    content.appendChild(clone);
  }

  // Atualiza o estado visual da navegação
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("font-bold", "text-emerald-500");
    if (link.dataset.page === page) {
      link.classList.add("font-bold", "text-emerald-500");
    }
  });

  // Fecha o menu mobile, se estiver aberto
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu.classList.contains("hidden")) {
    toggleMobileMenu();
  }
  window.scrollTo(0, 0); // Rola para o topo da página
}

// Função para alternar o menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Funções para gerenciar o Dropdown (Desktop)
function showDropdown(id) {
  document.getElementById(id).classList.remove("hidden");
}

function hideDropdown(id) {
  document.getElementById(id).classList.add("hidden");
}

// Função que lida com a submissão do formulário
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (!form.checkValidity()) {
    // O HTML5 nativamente já mostra as mensagens de erro
    form.reportValidity();
    return;
  }

  // Simula o processamento do formulário: limpa e exibe o modal
  form.reset();
  openModal("feedback-modal");
}

// Exibe o modal
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

// Fecha o modal
function closeModal() {
  document.getElementById("feedback-modal").classList.add("hidden");
}

// Inicializa a aplicação na página inicial e adiciona listener de submissão
window.onload = () => {
  navigate("index");

  // Adiciona o listener de submissão do formulário no escopo global
  document.addEventListener("submit", function (e) {
    if (e.target.id === "original-form") {
      handleFormSubmit(e);
    }
  });
};
