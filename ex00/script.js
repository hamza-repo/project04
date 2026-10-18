const button = document.getElementById("switch");


button.addEventListener("click", dark);

function dark() {
    document.querySelector("body").classList.toggle("active");
    document.querySelector("header").classList.toggle("headeractive");

    if (button.textContent=== "Light theme")
    {
        button.textContent= "Dark theme";
    }
    else{
        button.textContent= "Light theme"
    }
}