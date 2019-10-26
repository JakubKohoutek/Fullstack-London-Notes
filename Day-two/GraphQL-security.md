# GraphQL Security - Quick Wins

Don Burks

@don_burks

"Just because it's new, that doesn't mean it is secure."

One of urges of modern developers is to use the most recent technologies right away.

Necessary things to secure GraphQL:

## Route change

Many things we do as developers are conventions, not requirements. One of those things is that `/graphql` should be a default route. We should change it to anything, e.g. `/fluffybunny`.

It's a little security through obscurity, but it takes you off the radar.

Also disable `/graphiql` that is enabled by default! (use for example graphql-ide or Insomnia app instead)

## Introspection

Is great when you're alone. Not so great when you're standing in front of 7 billion people.

Introspection will return all of your schema, mutations (including parameters),... That is a high risk. We should disable introspection in our testing and production environments. `Apollo` and `Realay` now do this by default (in prod).

Test for introspection leakiness in your testing environment.

## Authentication

This tends to be a big mistake in new GraphQL implementations.

* We should use e.g. JWT at the **context** level - in the Authorization header, just like API.
* ACL (Access Control Layer) should be also implemented
* Edges

## Depth / Complexity

Easier than we think, but at the same time more important than we realize.

* Depth - counting the number of edges my query is trying to access. Too much depth can DDOS our server due to overloading our data structure.
* Complexity - Some queries may have extreme complexity to them, and should be evaluated accordingly. This involves queries doing heavy joins, aggregations or retrieving data from external APIs.

If our query is deeper than 5, than it shows we have some issues with structure of our data.

There are some good `npm` modules that are targeting the issue.

## Schema generation

There are really great tools that will take existing SQL database and generate SQL schema from it. But that's one of the most dangerous approaches. We have to think about what we really want (and need) to expose through the API - we probably don't want to expose the whole database.

Also we should create Mutations before we create our queries.

We should **design our SDL schema, not to generate it**.

"If it seems magical, it is probably dangerous."
