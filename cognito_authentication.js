const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const cognito = new AWS.CognitoIdentityServiceProvider();

const signUp = async (username, password, email) => {
    const params = {
        ClientId: 'your-client-id',
        Username: username,
        Password: password,
        UserAttributes: [{ Name: 'email', Value: email }],
    };

    try {
        const data = await cognito.signUp(params).promise();
        console.log('User registered:', data);
    } catch (err) {
        console.error('Signup error:', err);
    }
};
