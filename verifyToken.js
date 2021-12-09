
var jwt = require('jsonwebtoken');
var fs  = require('fs')

var publicKey = fs.readFileSync("cert.pem")
// get token from token endpoint: http://localhost:8080/auth/realms/demo/protocol/openid-connect/token
var id_token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJvajR4QTJhNzVyMzkxeXk2YWdNTDVGc2czQUlsdnJYQ3YtR29BMktTSE84In0.eyJleHAiOjE2Mzk0OTU3NTUsImlhdCI6MTYzOTA2Mzc1NSwiYXV0aF90aW1lIjowLCJqdGkiOiI3ZTNhZmViZS1mY2U2LTQyNzUtOTVhMi1iMTlhYWYzNzQ1YjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvZGVtbyIsImF1ZCI6ImRlbW9hcHAiLCJzdWIiOiJjNGEzMTAzNS01OTExLTQxOWEtOWU4OC1jN2Q1NmEwYjZhNWMiLCJ0eXAiOiJJRCIsImF6cCI6ImRlbW9hcHAiLCJzZXNzaW9uX3N0YXRlIjoiNDQyOGExMTAtZTE4NS00OWFiLTk0YjAtMzY3YmVmYmI3YzUyIiwiYXRfaGFzaCI6Im82ZWJXc09Rb1hxSk8xWlBUa3BsbkEiLCJhY3IiOiIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiJ9.lZSGFW03CCP88FyfdjLUr0PPv3KYYmAyZiwreQ5s47B3Z0fqbyWGNewKA0YDUwBItZWjoEjRHIdrdLYS_-bJO8ncE-bikJNyu0YJptUd9KvqLm5sU_3m1cDxGBq90gMUvMs99qDNL4UQ1sqtwwC6ARhb3QSCbl5JRK7bfLtH_I6rJ1Lg5f6hjjnKCvXLDg0bVv5yCiEk5f0lH_rDuDSh7jTRJzebWT-aKCnatrijr7r5upIuhJqfzxb94bfxcj0pdPKLI7lvy1xGUMRD2DaZcBTcGzPIfUL6RQGM-A16hzFLUz34_IF_wsllVSP3SGSgEmhahxTUYolSEh9IE-6FMA"

try {
    var decodedtoken = jwt.verify(id_token, publicKey, { 
        algorithms: ['RS256'], 
        issuer: 'http://localhost:8080/auth/realms/demo',
        audience: 'demoapp',
    })
    console.log(decodedtoken)

} catch (e) {
    console.log("Invalid Token")
}

