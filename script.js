let competence = document.getElementById("competence");
let formation = document.getElementById("formation");
let experience = document.getElementById("experience");
let realisation = document.getElementById("realisation");

competence.style.width = "0px";
formation.style.width = "0px";
experience.style.width = "0px";
realisation.style.width = "0px";

function closeAll() {
    competence.style.width = "0px";
    formation.style.width = "0px";
    experience.style.width = "0px";
    realisation.style.width = "0px";
}

function slide(a, b, c, d) {
    if (a.style.width == "0px" || a.style.zIndex == "1") {
        a.style.width = "85%";
        a.style.zIndex = "2";
        b.style.zIndex = "1";
        c.style.zIndex = "1";
        d.style.zIndex = "1";

    } else {
        a.style.width = "0px";
        competence.style.zIndex = "0";
        formation.style.zIndex = "0";
        experience.style.zIndex = "0";
        realisation.style.zIndex = "0";
    }
}