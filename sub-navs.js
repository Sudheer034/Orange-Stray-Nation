const tabButtons = document.querySelectorAll('.tab-btn');
const collapseMain = document.querySelector('.main');
const homeButton = document.querySelector('.home');
const tabPanel = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanel.forEach(panel => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');

    collapseMain.classList.add('active');
  });
});

homeButton.addEventListener('click', () => {
  collapseMain.classList.remove('active');
});