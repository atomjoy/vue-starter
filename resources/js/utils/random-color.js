function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeRootColor = () => {
  document.documentElement.style.setProperty('--root-color', randomColor());
}

export { randomColor as default, changeRootColor }