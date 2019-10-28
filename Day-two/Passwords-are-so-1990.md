# Passwords are so 1990

Sam Bellen

Developer Evangelist @ Auth0

@sambego

* Passwords dates back to Roman empire
* In 1970 hashing was invented (until that time, passwords were stored in plain text)
* Password is essentially string of characters. The more complex (and secure) the harder it is to remember it. Password manager can help with that.
* Pin codes are also passwords, but they are easy to guess, that's why usually there are only a few trials allowed.

## Problem with passwords

* Passwords are annoying
* User data can get stolen

## Passwordless

Valid for one time use. Can be implemented using:

* SMS (one time code)
* Email (unique one-time link)
* Authenticator app - `google authenticator` app generates one time passwords valid for 30 seconds, but this solution needs a shared secret that can leak
* Social login - login via social network
* Web authentication API

## Web authentication API

* Became standard recently. It's a key based authentication and use a hardware authenticator (e.g. usb stick).
* Not many people has the authenticators
* Most modern devices have a built in authenticator (some specific chip)

It works on the public-private key base - the authenticator creates them automatically when we register to some application.

Google or Github support it currently.

## Nice web app to play with web authentication API

[https://webauthn.me/](https://webauthn.me/)

## Presentation

[https://1990.sambego.tech/](https://1990.sambego.tech/)
