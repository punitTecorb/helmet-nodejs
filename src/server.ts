import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
// Constants
const app = express();

/***********************************************************************************
 *                                  Middlewares  
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Helmet use start -------------------------------

// For normal use
app.use(helmet());
// To set custom options for a header, add options
app.use(helmet({referrerPolicy: { policy: "no-referrer" }}));

// You can also disable a middleware:
// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(helmet({contentSecurityPolicy: false}));

// Other headers
app.use(helmet.contentSecurityPolicy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// Helmet end -----------------------------

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === 'production') {
    
}

export default app;