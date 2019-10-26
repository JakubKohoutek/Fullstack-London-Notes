# Concurrent Editing with JSON Patch

Jason Green

@aziraphael
@threads_eng

Concurrent editing has become expectation nowadays in all CMS systems. You want to avoid concurrent editing if possible as it opens a whole new can of warms. But if you decide that you really need it, you would expect that it is solved problem. But there are either old and abandoned frameworks or very specific solutions.

## Requirements

* keep it simple (as agile as possible)
* won data and control it
* keep it flexible
* understand ho wit works
* keep data eventually consistent across users
* use JSON

## Options

* Conflict-free replicated data type - redis, riak
* Differential Synchronization - git svn
* Operational Transformation - google docs

## Operational Transformations

OT is an algorithm/technique for transformation of operation (changes) such that they can be applied to documents whose states have diverged, bringing them both back to the same state.

## Why OT

* it can resolve all types of conflicts in an acceptable way without human intervention
* it is good at preserving intention of changes
* it works well with a central source of state
* it can handle offline working ok
* it works well with a series of changes a s the source of truth
* it is relatively easy to reason about

## JSON Patch

[http://jsonpatch.com/](http://jsonpatch.com/)

```javascript
{
  op: 'add',
  path: '/title',
  value: 'foo'
}
```

They decided to implement `append only` change log - any undo operation is a new change. That allows historical snapshots, so having version history is really simple.

They built an updated and maintained library written in TS (yet still in beta version):

[https://github.com/ThreadsStyling/json-patch-ot/](https://github.com/ThreadsStyling/json-patch-ot/)
