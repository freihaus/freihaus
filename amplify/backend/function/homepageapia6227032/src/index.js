const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Method not allowed'),
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);
        const ses = new AWS.SES();
        const params = {
            Destination: {
                ToAddresses: ['admin@freihaus.ch'] 
            },
            Message: {
                Body: {
                    Text: {
                        Data: `
                        Neue Email von der Freihaus Website\n
                        Name: ${name}\n
                        Email: ${email}\n
                        Message: ${message}`
                    }
                },
                Subject: {
                    Data: `Neue Nachricht von ${name} auf der Freihaus Website`
                }
            },
            Source: 'admin@freihaus.ch'
        };

        await ses.sendEmail(params).promise();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Email send successfully'),
        };
    } catch (error) {
        console.error(`Error: ${error}`);

        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Bad request'),
        };
    }
};