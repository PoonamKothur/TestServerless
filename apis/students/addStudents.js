

const AWS = require("aws-sdk");

const generateUStudentid = Math.random() * 1000;

//initialse dynamoDB
const documentCLient = new AWS.DynamoDB.DocumentClient();


const insertStudent = async (body) => {
    const params = {
        TableName: "Students",
        Item: {
            Id: generateUStudentid,
            firstName: body.firstName
        }
    };

    return await documentCLient.put(params).promise();
};

exports.handler = async event => {
    
    const  body = JSON.parse(event.body);

    try {
        const data = await insertStudent(body);
 
        const response = {
            statusCode: 200
        };
        return response;
    } 
    catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify(e)
        };
    }
    return {
        statusCode: 500
    };
}