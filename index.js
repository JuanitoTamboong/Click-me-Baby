window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", signUpFunc);
    
    function signUpFunc() {
        var altr = prompt("What's Your Name? ");
        alert("Hi, " + altr + " alam mo bang bagay ka sakin");
        
    }
    };
    
