# Lightning Talk: Lessons Learned Converting Snyk Codebase to TypeScript

Liliana Kastilio

They decided that they will have both JS and TS files in the same repo, that they will rewrite it gradually, not all at once. They started with `index.js` and transformed it to `index.ts`

They sticked to simple rules:

* all new files and repositories are TS
* always update require to import/export once the file is touched
* always add basic types (ideally more)
* convert related tests to TS too

Now they are about 35 % TS

## Benefits

* Unused variables and functions
* Parameters in a wrong order
* Refactoring is much easier
* Better mocked boundaries
* Thinking about the wider context
* Improved architecture
* ...
