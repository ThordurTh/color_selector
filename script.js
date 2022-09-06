let colorPicker = document.getElementById("color_input");
let colorBox = document.querySelector(".current_color");
let currentColor;
// let rgb;
// let r;
// let g;
// let b;
let hex_code = document.querySelector(".hex");
let rgb_code = document.querySelector(".rgb");
let hsl_code = document.querySelector(".hsl");


colorPicker.addEventListener("input", changeColor)

function changeColor() {
    currentColor = colorPicker.value;
    colorBox.style.backgroundColor = currentColor;

    hex_code.textContent = `HEX: ${colorPicker.value}`;
    
    rgb_code.textContent = `RGB: ${convertToRGB(currentColor)}`;

    hsl_code.textContent = `HSL: ${convertToHSL(r,g,b)}`;
}

function convertToRGB(hex) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
    return (`${r}, ${g}, ${b}`) 
}

function convertToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
  
    return (`${Math.floor(h)}, ${Math.floor(s)}%, ${Math.floor(l)}%`)
}