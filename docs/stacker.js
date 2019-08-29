document.addEventListener("DOMContentLoaded", function(){
  let toggleEl = document.getElementById("stacker-toggle");
  toggleEl.addEventListener("click", function(){
    let body = document.documentElement.children[1];
    if (body.className.length > 0) {
      body.className = "";
    }
    else {
      body.className = "stacker";
    }
  });
});
