# Security in Node.js

@ForbesLindesay

atauthentication.org
atdatabases.org

The most common problems:

* Cross Site Request Forgery - Session Storage
* SQL injection
* Guessing / stealing passwords - Rate limits

First question to ask is - does my application need a password? It is not easy to create and maintain secure application that stores and handles passwords, possible solutions:

* Passwordless, e.g. one time access code over SMS or e-mail
* OAuth - rely on a third party service

Correct way to store passwords:

* Never store it in plain form
* Use hash function
* Generate salt and store only hashed password with salt

see:

* @authentication/secure-hash
* @authentication/google-authenticator

It's good to have a two factor authentication at least as an option.

## Limiting the number of password attempts

We could limit the number of requests to some fixed number. Downside is that it's super easy for someone evil to lock my account.

## Exponential Delay

It solves the issue of somebody else locking my account as it creates obstacle for him. It has a limitation - we have to reset it on successful login, so it has to be connected to the specific account and we don't want that as it consumes our processing time.

Possible solution is 'Token Bucket Approach'

## Session Storage

* Solves Cross Site Request Forgery
* There is an insecure Cookie npm package that has wrong default configuration

  * httpOnly - prevents accessing via JavaScript, defaults to false
  * sameSite - prevents CSRF (in modern browsers), defaults to false
  * secure - requires SSL, defaults to false

See:

@authentication/cookie
@authentication/cookie-session

## SQL Injection

Problem with SQL injection is that it mixes data and code

```SQL
INSERT INTO Posts
(body, author)
VALUES
(body, author)
```

One way to avoid SQL injection is ORM, but its use is limited. Another solution is to parametrize the query:

```javascript
query(
  `INSERT INTO Posts
  (body, author)
  VALUES
  (?, ?)`,
  [body, author]
)
```

But the correct solution is 'Tagged Template Literals':

```javascript
import sql from '@databases/sql';

query(
  sql`
    INSERT INTO Posts
    (body, author)
    VALUES
    (${body}, ${author})
  `
);
```
