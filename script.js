
for (let i = 0; i < 10; i++) {
    
    const newPara = document.createElement('p');
    newPara.textContent = "Welcome traveller";
    document.body.prepend(newPara);
    if (i % 2 == 0) {
        newPara.style.setProperty('color', 'red');
    } else {
        newPara.style.setProperty('color', 'green');
    }
}
