import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017/test_db';

mongoose.connect(url)
    .then(() => {
        console.log('Connected to local MongoDB successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Failed to connect to local MongoDB:', err);
        process.exit(1);
    });
