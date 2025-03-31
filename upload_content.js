const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadFile = async (filePath, bucketName) => {
    const fileContent = fs.readFileSync(filePath);
    const params = {
        Bucket: bucketName,
        Key: 'index.html',
        Body: fileContent,
        ContentType: 'text/html'
    };

    try {
        const data = await s3.upload(params).promise();
        console.log('File uploaded:', data.Location);
    } catch (err) {
        console.error('Upload error:', err);
    }
};
