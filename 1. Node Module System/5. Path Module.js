const path = require('path');

let pathObject = path.parse(__filename);

console.log(pathObject);
/*
{  
  root: 'C:\\',
  dir: 'C:\\Users\\Lorenzo\\Desktop\\JS\\Node\\first-app\\1. Node Module System',
  base: '5. Path Module.js',
  ext: '.js',
  name: '5. Path Module'
}
*/
