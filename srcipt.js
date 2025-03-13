function handlerMode() {
  let btn = document.querySelector("#btn");
  let classHtml = document.querySelector("html");
  btn.addEventListener("click", (e) => {
    let mode = classHtml.classList;
    if (mode == 'light') {
      mode.remove('light');
      mode.add('dark');
    }
    else {
      mode.remove('dark');
      mode.add('light');
    }
  })
}
handlerMode();