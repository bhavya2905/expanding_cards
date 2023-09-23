const panels = document.querySelectorAll('.panel');
let active = document.querySelector('.active');

panels.forEach(panel => {
    panel.addEventListener("click",()=>{
        active.classList.remove('active');
        panel.classList.add('active');
        active = panel;
    })
});
