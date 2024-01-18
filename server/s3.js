import aws from "aws-sdk";
import crypto from "crypto";
import dotenv from "dotenv";
import { promisify } from "util";

dotenv.config();

const randomBytes = promisify(crypto.randomBytes);

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESSKEYID;
const secretAccessKey = process.env.AWS_SECRETACCESSKEY;
const bucketName = process.env.AWS_BUCKETNAME;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

const generateSignedUrl = async () => {
  const bytes = await randomBytes(16);
  const videoName = bytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: videoName,
    Expires: 60,
  };

  // S3 is on cloud. So apply await as it is asynchronous
  const signedUrl = await s3.getSignedUrlPromise("putObject", params);

  return signedUrl;
};

export default generateSignedUrl;
