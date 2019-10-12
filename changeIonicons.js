const fs = require('fs');
const path = require('path');

const ttfFile = path.join(__dirname, 'Fonts', 'Ionicons.ttf');
const glyphFile = path.join(__dirname, 'Fonts', 'Ionicons.json');

fs.copyFileSync(
  ttfFile,
  path.join(
    __dirname,
    'node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'
  )
);

fs.copyFileSync(
  glyphFile,
  path.join(
    __dirname, 
    'node_modules/react-native-vector-icons/glyphmaps/Ionicons.json'
  )
);