function abrirMenuMobile(){
    let containerMenu = document.getElementById('menu-lateral-mobile');

    containerMenu.style.display = "flex"
}

function fecharMenuMobile(){
    let containerMenu =  document.getElementById('menu-lateral-mobile');

    containerMenu.style.display = "none"
}
 // Obtém o elemento do cabeçalho
 const header = document.getElementById("header");
  
 // Função para verificar o scroll
 function checkScroll() {
   if (window.scrollY > 0) {
     // Verifica a posição do scroll
     header.classList.add("bg-white");
   } else {
     header.classList.remove("bg-white");
   }
 }
 
 // Adiciona o ouvinte de evento para o scroll
 window.addEventListener("scroll", checkScroll);

function openForm(){
  const containerForm = document.getElementById("container-form-bg");
  containerForm.style.display = "block"
}

function fecharForm(){
  const containerForm = document.getElementById("container-form-bg");
  containerForm.style.display = "none"
}