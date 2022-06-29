const $UserName = document.getElementById('UserID');
const $Password = document.getElementById('PasswordID');
const $Button = document.getElementById('btn');
const $Alert = document.getElementById('alert');
const $Error = 'DB IS NOT CONNECTED.';

$Button.addEventListener('click', ()=>{

    const _setInfo = ()=>{
        $Alert.style.display = 'block';
        $Alert.style.color = 'yellow';
        $Alert.textContent = 'Verifyng...';
    };

    const _setUser = ()=>{
        localStorage.setItem('UserName', $UserName.value);
        alert('se guardo en la BD: ' + localStorage.getItem('UserName'))
    };

    _setUser()
});

