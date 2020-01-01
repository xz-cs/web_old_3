let courses_rows;
let links, vinfo, vcode;

function init() {
    document.getElementById("content2").innerHTML = '<h2>And if you want to...</h2><p id="p1"><a href="schedule.html" target="_blank">Contact me?<br><br></a><a href="joinscratch.html" target="_blank">Join me in scratch?</a><br><br><a href="games.html" target="_blank">Play a game?</a><br><br><a href="calculator" target="_blank">Try out my online calculator?</a><br><br></p>';
    document.getElementById("no").innerHTML = '<h4>See a video taken by me on the top of Hall 4 (extended)!</h4><video controls src="video/alt_video.MOV"></video>';
    courses_rows = document.querySelectorAll("tbody tr");
    for (let i = 0; i < courses_rows.length; i++) {
        courses_rows[i].onclick = navigate;
    }
    links = document.querySelectorAll("a, a:visited ");
    vinfo = document.querySelector("#vinfo");
    vcode = document.querySelector("#vcode");
    vinfo.onclick = toggle;
    vcode.style.display = "none";
}

function msg() {
    alert(" Sorry, this page is still under development. ");
}

function dark() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "lightcoral";
    }
}

function light() {
    document.querySelector("body").style.backgroundColor = "skyblue";
    document.querySelector("body").style.color = "black";
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "rgb(0, 0, 238)";
    }
}

function navigate() {
    let code = this.innerHTML.split(">")[1].split("<")[0];
    let url = "https://www.cityu.edu.hk/catalogue/ug/201920/course/" + code + ".htm";
    window.open(url);
}

function toggle() {
    if (vcode.style.display === "none") {
        vcode.style.display = "inline-block";
    } else {
        vcode.style.display = "none";
    }
}
