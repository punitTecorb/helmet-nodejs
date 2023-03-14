## Helmet express

## Introduction
  Helmet helps you secure your Express apps by setting various HTTP headers.
  Helmet is a Node.js module that helps in securing HTTP headers. It is implemented in express applications. Therefore, we can say that helmet.js helps in securing express applications. It sets up various HTTP headers to prevent attacks like Cross-Site-Scripting(XSS), clickjacking, etc.

## Why security of HTTP headers are important: 
  Sometimes developers ignore the HTTP headers. Since HTTP headers can leak sensitive information about the application, therefore, it is important to use the headers in a secure way.

## Node-Modules included in Helmet.js are: 
  Helmet.js comes with more built-in modules for increasing the security of the Express application.

  1. Content-Security-Policy: It sets up the Security Policy.
  2. Expect-CT: It is used for handling Certificate Transparency.
  3. X-DNS-Prefetch-Control: It is used for controlling the fetching of browser DNS.
  4. X-Frame-Options: It is used to prevent ClickJacking.
  5. X-Powered-By: It is used to remove X-Powered-By header. X-Powered-By header leaks the version of the server and its vendor.
  6. Public-Key-Pins: It is used for HTTP public key pinning.
  7. Strict-Transport-Security: It is used for HTTP Strict Transport policy.
  8. X-Download-Options: It restricts to various Download-Options.
  9. Cache control: It is used for disabling Client-Side caching.
  10. X-Content-Type-Options: It is used to prevent the Sniffing attack.
  11. Referrer-Policy: It is used to hide the referrer header.
  12. X-XSS-Protection: It is used to add protection to XSS attacks.

## Setup Steps:
### Install project dependency
`npm install`
### local server
`npm run start:dev`
### prod build
`npm run build`
### prod build run
`node dist/index.js`

## Send mail demo apis - 
  #### Send mail api using nodemailer
  `{{Your Ip}}/api/v1/mailer/senaMailByMailer`
