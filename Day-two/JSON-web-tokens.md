# Authenticating your single page apps using JSON Web Tokens

Sam Bellen

Cookies are something used only on the web. If we build something for other platforms (mobile, desktop). Cookies also don't like CORS. That makes them inconvenient for sending (session) tokens

## Token

Unique identifier that represents something, for example UUID.

## JSON Web Token

[https://jwt.io/](https://jwt.io/)

Consists of three different (usually HS256 encrypted) JSONs (parts) separated by dots:

* Header
* Payload - it contains also an expiry date
* Signature - HMACSHA256 based signature cosisted from header and payload. If anything changes in header or payload, signature would not be valid.

### Access Token

Used to access some API endpoint

### ID token

Concern about identity of authenticated person

## JSON Web Key (JWK)

Public key that is used to validate the signature. The key is necessary to decide if the signature is valid or not.

There is also JWSignature and other...

## What not to do

* Don't put any sensitive data to JWT
* Don't use *refresh tokens* unless you rotte them on a regular bases and they expire pretty fast

? ***Check out Open ID Connect OIDC***

[https://webauthn.me/](https://webauthn.me/)
