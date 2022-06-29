const $UserName = document.getElementById('UserID');
const $Password = document.getElementById('PasswordID');
const $Button = document.getElementById('btn');
const $Alert = document.getElementById('alert');
const $PerritoImg = document.querySelector('img');
const $Error = 'DB IS NOT CONNECTED.';



$PerritoImg.addEventListener('click', ()=>{
    let mySrc = $PerritoImg.getAttribute('src');
    if (mySrc === '/Hachiko2022.jpg') {
        $PerritoImg.setAttribute('src', '/PerritoNoPanzon.jpg');
    } else{
        $PerritoImg.setAttribute('src', '/Hachiko2022.jpg');
    }
});