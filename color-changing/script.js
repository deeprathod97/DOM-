function changeColor() {
    var textColor = document.getElementById("text").style.color;
    if (textColor === "black") {
      document.getElementById("text").style.color = "green";
    } else {
      document.getElementById("text").style.color = "black";
    }
  }