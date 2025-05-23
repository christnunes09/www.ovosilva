function jarvisFala() {
  const texto = "Olá! Seja bem-vindo à nossa loja de ovos e galinhas. Produtos de qualidade, direto da fazenda!";
  const synth = window.speechSynthesis;
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  synth.speak(fala);
}

function mostrarAba(id) {
  const abas = document.querySelectorAll('.aba');
  abas.forEach(aba => aba.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

function abrirModal(mensagem) {
  const modal = document.getElementById('modal');
  const textoModal = document.getElementById('modal-text');
  textoModal.textContent = mensagem;
  modal.style.display = 'flex';
}

function fecharModal(event) {
  if (event.target.id === 'modal' || event.target.className === 'fechar') {
    document.getElementById('modal').style.display = 'none';
  }
}
