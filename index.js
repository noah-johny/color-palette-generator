const schemeBtn = document.getElementById("scheme-btn");
const modeSelect = document.getElementById("mode-select");
const colorPicker = document.getElementById("color-picker");

const colorZero = document.getElementById("color-0");
const colorOne = document.getElementById("color-1");
const colorTwo = document.getElementById("color-2");
const colorThree = document.getElementById("color-3");
const colorFour = document.getElementById("color-4");

let seedcolor = "#ffffff",
  mode = "monochrome";

function rgbToHex(rgb) {
  // Extract the RGB values from the "rgb(r, g, b)" string
  var rgbValues = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  // Convert the RGB values to hexadecimal format
  var hex =
    "#" +
    Number(rgbValues[1]).toString(16).padStart(2, "0") +
    Number(rgbValues[2]).toString(16).padStart(2, "0") +
    Number(rgbValues[3]).toString(16).padStart(2, "0");

  // Return the hexadecimal string
  return hex;
}

function renderPalette() {
  fetch(
    "https://www.thecolorapi.com/scheme?" +
      new URLSearchParams({
        hex: seedcolor,
        mode: mode,
        count: "5",
      })
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i in data.colors) {
        let colorRectangleID = "color-" + i.toString();
        let colorCodeID = "color-code-" + i.toString();

        document.getElementById(colorRectangleID).style.backgroundColor =
          data.colors[i].hex.value;

        document.getElementById(colorCodeID).textContent =
          data.colors[i].hex.value;
        document.getElementById(colorCodeID).style.color =
          data.colors[i].hex.value;
        document.getElementById(colorCodeID).style.borderColor =
          data.colors[i].hex.value;
      }
    });
}

colorPicker.addEventListener("input", () => {
  seedcolor = colorPicker.value;
});

modeSelect.addEventListener("change", () => {
  mode = modeSelect.value;
});

schemeBtn.addEventListener("click", () => renderPalette());

colorZero.addEventListener("click", () => {
  let color =
    colorZero.style.backgroundColor
      ? rgbToHex(colorZero.style.backgroundColor)
      : "#000000";

  navigator.clipboard.writeText(color);
  alert(color + " Copied to clipboard!");
});

colorOne.addEventListener("click", () => {
  let color =
    colorOne.style.backgroundColor
      ? rgbToHex(colorOne.style.backgroundColor)
      : "#ffffff";

  navigator.clipboard.writeText(color);
  alert(color + " Copied to clipboard!");
});

colorTwo.addEventListener("click", () => {
  let color =
    colorTwo.style.backgroundColor
      ? rgbToHex(colorTwo.style.backgroundColor)
      : "#000000";

  navigator.clipboard.writeText(color);
  alert(color + " Copied to clipboard!");
});

colorThree.addEventListener("click", () => {
  let color =
    colorThree.style.backgroundColor
      ? rgbToHex(colorThree.style.backgroundColor)
      : "#ffffff";

  navigator.clipboard.writeText(color);
  alert(color + " Copied to clipboard!");
});

colorFour.addEventListener("click", () => {
  let color =
    colorFour.style.backgroundColor
      ? rgbToHex(colorFour.style.backgroundColor)
      : "#000000";

  navigator.clipboard.writeText(color);
  alert(color + " Copied to clipboard!");
});
