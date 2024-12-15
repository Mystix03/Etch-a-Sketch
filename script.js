let div_grid = document.querySelector(".grid-container");

a = "<br>"
for (i = 0; i<16; i++){
    for (j = 0; j<16; j++){
        div_c = document.createElement("div");
        div_grid.appendChild(div_c);
        div_c.style.display = "inline-block";
        
        div_c.classList.add("item");


    }
    let lineBreak = document.createElement("br");
    div_grid.appendChild(lineBreak);


}

color_change = () => {


}


gridlist = document.querySelectorAll(".item")
gridlist.forEach(items => {
    items.addEventListener("mouseover", (e) =>{
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#"+randomColor;
        
    })
});


let reset = document.createElement("button")


reset.textContent = "RESET";
document.querySelector(".top").appendChild(reset)


let side = 0;
reset.addEventListener("click", () => {
     side = prompt("Enter the number of boxes: ")
     console.log(side)
    getComputedStyle(document.documentElement)
        .getPropertyValue('--dynamic-value');

    document.documentElement.style
        .setProperty('--dynamic-value',side)
})


