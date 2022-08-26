const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const config = require('../../config')

const storage = new S3({
  region: config.aws.region,
  accessKeyId: config.aws.accesKeyId,
  secretAccessKey: config.aws.privateAccessKey
});

const bucketName = config.aws.s3BucketName

const getBuckets = () => {
  return storage.listBuckets().promise();
}

const uploadToBucket = (file) => {
  const stream = fs.createReadStream(file.tempFilePath);
  const params = {
    Bucket:bucketName,
    Key:file.name,
    Body:stream,
    ACL: 'public-read',
    ContentType: 'image/jpeg',
  }
  return storage.upload(params).promise();
};

module.exports = {
  uploadToBucket,
  getBuckets,
};