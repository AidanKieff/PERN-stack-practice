
// document.addEventListener('DOMContentLoaded', redirector);



// function redirector() {
//     const btn = document.getElementById("Redirect")
//     btn.addEventListener('click', function() {window.location = "./index.html"}); 
// };


// document.getElementById("Redirect").addEventListener("click", redirect);

// function redirect() {window.location = "./index.html"};

function isIndex() {
    return window.location.pathname.includes("index.html");
    
}

function insertRedirectButton() {
    if (!isIndex()) {
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "redirect");
        button.textContent = "Back";

        document.body.appendChild(button);

        button.addEventListener("click", function() {
            window.location = "./index.html";
        });
    }
}

insertRedirectButton();