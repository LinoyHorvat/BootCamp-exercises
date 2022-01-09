const fs = require('fs')
const path = require('path');

//  1. Create a new txt file using the same fs module method we have learned before.
fs.writeFileSync('node.txt','name is linoy');
// 2. Create a copy of the newly created txt file using a method from the fs module.
fs.copyFile('node.txt', 'copy.txt', (err) => {
  if (err) throw err;
  });
// 3. Rename one of the files using a method from the fs module.
fs.rename('node.txt', 'newFile.txt', (err) => {
if (err) throw err;
});
// 4. Get a list of all the file names of the current directory using a method from the fs module.
fs.readdir('../week12', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

// 5. Find out and implement another method for the fs module.
