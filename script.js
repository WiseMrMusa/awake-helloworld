var dropdownelements = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdownelements.length; i++) {
    dropdownelements[i].addEventListener((onmouseenter)=> {
        alert("HELLO")
    })
}