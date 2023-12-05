const characters ='0123456789ABCDEF';
let btn = document.getElementById('button');
let textGenerated = document.getElementById('color');
let colorContainer = document.getElementById('color-container')

btn.addEventListener('click', function() {
    
    let result = '#';
    const charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        colorContainer.style.background = result;
        textGenerated.innerText = result;
    }
});
