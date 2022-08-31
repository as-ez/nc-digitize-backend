const dotenv = require('dotenv');

const envFound = dotenv.config();
if(!envFound){
    throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    aws: {
        accesKeyId : process.env.ACCESS_KEY_ID,
        privateAccessKey : process.env.PRIVATE_ACCESS_KEY,
        s3BucketName: process.env.AWS_S3_BUCKET_NAME,
        region: process.env.AWS_REGION
    },
    mongo: {
        mongoUri: process.env.MONGO_URI
    },
    stripe: {
        stripeSecretKey: process.env.STRIPE_SK
    }
}
