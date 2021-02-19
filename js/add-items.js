const addItems = () => {
    const buttons = document.getElementsByClassName("add");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            localStorage.setItem("id-" + buttons[i].id, buttons[i].id);
        });
    }
}


// localStorage["Counter"]=0;
// var i = localStorage["Counter"]; 
// var d =localStorage["Value"+i];
// i = i + 1; // i becomes "01"
// var f = localStorage["Value"+i];


addItems();