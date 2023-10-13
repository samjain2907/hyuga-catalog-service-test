const redis = require('redis');

const redisClient = redis.createClient({
    url: process.env.REDIS_CLIENT
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

redisClient.connect()
    .then(console.log('redis connected'));

module.exports = redisClient;
