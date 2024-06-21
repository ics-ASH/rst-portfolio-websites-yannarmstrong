function greeterbutton() {
    let name = document.getElementById("name").value;
    document.getElementById("greetermessage").innerHTML =
    "Hi "+name+", enjoy your visit on my website!";
  }