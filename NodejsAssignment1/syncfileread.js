const fs = require ('fs');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

// Synchronous File Read and Hash Function
function readAndHashSync(filePath) {
  const startRead = performance.now();
  const data = fs.readFileSync(filePath, 'utf8');
  const endRead = performance.now();

  const startHash = performance.now();
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  const endHash = performance.now();

  console.log(`Sync File Read Time: ${endRead - startRead} ms`);
  console.log(`Sync Hash Time: ${endHash - startHash} ms`);
  console.log(`Sync Hash: ${hash}`);
}

const filePath = 'sample.txt';
readAndHashSync(filePath);
