import AWS from "aws-sdk";

AWS.config.update({ region: "us-west-1" });
const S3Client = new AWS.S3();

export const getPresignedUrl = (filePath) => {
  return new Promise(async function (resolve, reject) {
    var params = {
      Bucket: "tcs-dhruv",
      Key: filePath,
      ACL: "public-read",
    };

    S3Client.getSignedUrl("putObject", params, function (err, url) {
      if (err) {
        resolve(false);
      } else {
        resolve(url);
      }
    });
  });
};
