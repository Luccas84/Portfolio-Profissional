document.addEventListener("DOMContentLoaded", function () {
  // Ativar menu conforme a rolagem
  const sections = document.querySelectorAll(".content-section");
  const menuItems = document.querySelectorAll(".profile-menu a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute("id");
      }
    });

    menuItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Suavizar transição entre seções
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Atualizar URL sem recarregar a página
      history.pushState(null, null, targetId);
    });
  });

  // Animação para elementos quando aparecem na tela
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".timeline-item, .education-item, .project-card, .skills-category"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Configurar elementos para animação
  const animatedElements = document.querySelectorAll(
    ".timeline-item, .education-item, .project-card, .skills-category"
  );

  // Inicializar elementos com estilo inicial
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Adicionar evento de scroll para animação
  window.addEventListener("scroll", animateOnScroll);

  // Executar uma vez ao carregar para verificar elementos já visíveis
  animateOnScroll();
});

// menu-mobile

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = document.querySelectorAll(".mobile-menu-items a");
  const menuOverlay = document.createElement("div");

  // Cria o overlay dinamicamente
  menuOverlay.className = "menu-overlay";
  document.body.appendChild(menuOverlay);

  // Abrir menu
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Fechar menu
  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeMenu.addEventListener("click", closeMobileMenu);

  // Fechar menu ao clicar no overlay
  menuOverlay.addEventListener("click", closeMobileMenu);

  // Fechar menu ao clicar em um link
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Fechar menu com tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Ativar link ativo no menu mobile
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".content-section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute("id");
      }
    });

    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
