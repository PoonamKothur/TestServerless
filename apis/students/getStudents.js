const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler.list = async event => {
    const params = {
        TableName: "Students"
    };
    try {
        const data = await documentClient.scan(params).promise();
        if(data){
        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };
        return response;
        }
    } catch (e) {
        console.log(e);
    }
    
    return {
        statusCode: 500
    };
};