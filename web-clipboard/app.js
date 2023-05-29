document.addEventListener("keydown", (ev) => {

  if (ev.key === "Escape") {
    console.log(document.activeElement)
  }

})


document.querySelectorAll(".grid")
  .forEach(el => {
    el.addEventListener("copy", (ev) => {
      console.log("copy")
    })

    el.addEventListener("cut", (ev) => {
      console.log("cut")
    })

    el.addEventListener("paste", (ev) => {
      console.log("paste")
    })

    el.addEventListener("keydown", (ev) => {
      console.log(ev.key);
    });
  })

