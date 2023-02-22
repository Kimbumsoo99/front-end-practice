const random = (number) => {
  return Math.floor(Math.random() * number);
};

const bgChange = () => {
  const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
bgChange();
