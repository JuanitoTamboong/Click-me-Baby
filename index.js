window.onload = function() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", signUpFunc);
    
    function signUpFunc() {
        var altr = prompt("What's Your Name? ");
        alert("Hi, " + altr + " alam mo bang bagay tayo");
        
    }
    };
     const audio = new Audio();
    audio.src = "https://abdulmoqueet.github.io/music-player/songs/On_My_Way.mp3";

