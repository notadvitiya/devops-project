document.getElementById("aboutBtn").addEventListener("click", function () {
    var section = document.getElementById("aboutSection");
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});
