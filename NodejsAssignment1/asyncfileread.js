const fs = require('fs');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

// Asynchronous File Read and Hash Function
function readAndHashAsync(filePath) {
  const startRead = performance.now();
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const endRead = performance.now();

    const startHash = performance.now();
    crypto.pbkdf2(data, 'salt', 100000, 64, 'sha256', (err, derivedKey) => {
      if (err) throw err;
      const endHash = performance.now();

      console.log(`Async File Read Time: ${endRead - startRead} ms`);
      console.log(`Async Hash Time: ${endHash - startHash} ms`);
      console.log(`Async Hash: ${derivedKey.toString('hex')}`);
    });
  });
}

const filePath = 'sample.txt';
readAndHashAsync(filePath);
