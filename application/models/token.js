var AWS = require("aws-sdk");

if(process.env.ENVIRONMENT == "local"){
    AWS.config.update({
        region: "us-west-2",
        endpoint: "http://localhost:8000"
    });
}

var docClient = new AWS.DynamoDB.DocumentClient();
var table_name = "Tokens";

exports.get = function (key, cb) {
    var params = {
        TableName: table_name,
        Key: key
    };
    docClient.get(params, function(err, data){
        cb(err, data.Item);
    });
};

exports.put = function (item, cb) {
    var params = {
        TableName: table_name,
        Item: item
    };
    docClient.put(params, function(err, data){
        cb(err, data);
    });
};
