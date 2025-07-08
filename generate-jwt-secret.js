// Run this script to generate a secure JWT secret
// Command: node generate-jwt-secret.js

const crypto = require('crypto');

const jwtSecret = crypto.randomBytes(32).toString('hex');
console.log('Generated JWT Secret:');
console.log(jwtSecret);
console.log('\nCopy this value and use it as your JWT_SECRET environment variable in Render');
