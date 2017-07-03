var messageListener = require("./src/message-listener");

var server = require('./server');
server().then((server) => {
    var port = process.env.VCAP_APP_PORT || process.env.PORT || 3000;
    var host = process.env.VCAP_APP_HOST || process.env.IP || "0.0.0.0";
    server.listen(port, host);
    messageListener.listen();
    console.log(`server created at: ${host}:${port}`);
});
