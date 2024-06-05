const crypto = require ('crypto');
const { performance } = require('perf_hooks');

// Sample data to hash
const part1 = 'my ';
const part2 = 'self ';
const part3 = 'amruta';

// Synchronous hash operation
function hashSync() {
  const start = performance.now();

  // Initialize a SHA-256 hash object
  const hash = crypto.createHash('sha256');

  // Update the hash with data in multiple parts
  hash.update(part1);
  hash.update(part2);
  hash.update(part3);

  // Finalize the hash and get the result in hex format
  const hashValue = hash.digest('hex');

  const end = performance.now();
  console.log(`Sync Hash: ${hashValue}`);
  console.log(`Time taken for sync hash: ${end - start} ms`);
}

// Asynchronous hash operation
function hashAsync(data) {
  const start = performance.now();

  // Using pbkdf2 for async hash
  crypto.pbkdf2(data, 'salt', 100000, 64, 'sha256', (err, derivedKey) => {
    if (err) throw err;

    const end = performance.now();
    console.log(`Async Hash: ${derivedKey.toString('hex')}`);
    console.log(`Time taken for async hash: ${end - start} ms`);
  });
}

// Execute both functions
hashSync();
hashAsync(part1 + part2 + part3);
