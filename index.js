window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", signUpFunc);
    
    function signUpFunc() {
        var altr = prompt("What's Your Name? ");
        alert("Hi, " + altr + " can u be my girlfriend?");
        
    }
    };
    
