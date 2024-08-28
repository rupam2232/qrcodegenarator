const output = document.getElementById("output");
const button = document.querySelectorAll(".button");
const select = document.getElementById("sizes");
const qr = document.querySelector(".qr");

let size

button[0].addEventListener("click", (e) => {
  console.log("clicked")
  qr.style.outline = "0"
  qr.innerHTML = ""
  e.preventDefault()
  size = select.value
  if (output.value) {
    generateqr();
    qr.style.outline = "1px solid white"
  }
})

select.addEventListener("change", (e) => {
  size = e.target.value;
  if (qr.childElementCount !== 0) {
    generateqr()
  }
})

function generateqr() {
  qr.innerHTML = ""
  new QRCode(qr, {
    text: output.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
  setTimeout(() => {
    let img = document.querySelector(".qr img")
    if (img !== null) {
          let imgatrr = img.getAttribute("src");
          button[1].setAttribute("href", imgatrr)
        }
  }, 100);
}
