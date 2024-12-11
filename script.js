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
     header.classList.add("bg-white"); // Adiciona a classe para o fundo branco
   } else {
     header.classList.remove("bg-white"); // Remove a classe quando volta ao topo
   }
 }
 
 // Adiciona o ouvinte de evento para o scroll
 window.addEventListener("scroll", checkScroll);

 function openForm(){
    const formContact = document.getElementById("sessao-form");
    formContact.style.display = "block"
 }

 function fecharForm(){
    const formContact = document.getElementById("sessao-form");
    formContact.style.display = "none"
 }