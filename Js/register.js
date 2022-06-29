const $Button = document.getElementById('btn');

$Button.addEventListener('click', ()=>{
    alert('Has tocado el boton!');
    console.warn('Se ha presionado el boton');
});

$Button.onclick = ()=>{
    
}