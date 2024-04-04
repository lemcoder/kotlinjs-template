function setupDevServer(callback) {
    const devCerts = require('office-addin-dev-certs');
    devCerts.getHttpsServerOptions()
        .then(httpsOptions => {
            const serverOptions = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                server: {
                    type: 'https',
                    options: {
                        ca: httpsOptions.ca,
                        key: httpsOptions.key,
                        cert: httpsOptions.cert
                    }
                },
                open: false
            };
            callback(serverOptions);
        })
        .catch(error => {
            console.error("Error obtaining HTTPS options:", error);
            callback({});
        });
}

setupDevServer(devServerOptions => {
    config.devServer = Object.assign({}, config.devServer || {}, devServerOptions);
});