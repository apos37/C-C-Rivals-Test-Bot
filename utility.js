// Embed footer
const MESSAGE_FOOTER = {
  text: `C&C Rivals Resource Server: \nhttps://discord.gg/KYqvSvtHfF`,
  iconUrl: 'https://i.imgur.com/ctF1Dj3.png',
};

// Embed color
const MESSAGE_COLOR = 0x66E650;
const NOD_COLOR = 0xB31514;
const GDI_COLOR = 0x0F72EA;

// Convert string to title case
function titleCase(str) {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  return str2;
}

// Sort array in ascending order
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

// Sort array of objects by property
function sortObjByName( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

// Exports
module.exports = {
  MESSAGE_FOOTER,
  MESSAGE_COLOR,
  NOD_COLOR,
  GDI_COLOR,
  titleCase,
  ascendingOrder,
  sortObjByName
};