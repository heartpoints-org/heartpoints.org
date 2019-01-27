import expressModule from "express";
import http from "http";
import path from "path";

const EXPRESS_PORT_CONFIG_KEY = 'port';
const STARTUP_MESSAGE = 'Express server listening on http://localhost:';
const { env } = process;
const { commitSha } = env

const httpPort = env.PORT ? env.PORT : 5001;
const expressApplication = expressModule();

function setUpCoreServer(expressApplication) {
    expressApplication.set(EXPRESS_PORT_CONFIG_KEY, httpPort);
}

function setUpMiddleWare(expressApplication) {
    expressApplication.use((req, response, next) => {
        response.set({ commitSha });	
        next();
    });
    expressApplication.use(expressModule.static(path.join(__dirname, "./public")));
    expressApplication.use(expressModule.static(path.join(__dirname, "../node_modules")));
    expressApplication.use(expressModule.static(path.join(__dirname, "../dist")));
}

function startServer(expressApplication) {
    http.createServer(expressApplication).listen(expressApplication.get(EXPRESS_PORT_CONFIG_KEY), function(){
        console.log(STARTUP_MESSAGE + httpPort);
    });
}

setUpCoreServer(expressApplication);
setUpMiddleWare(expressApplication);
startServer(expressApplication);