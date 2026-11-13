# code-golf-expr — AIProve

Smallest expression evaluator that passes every test.

## Entry

`index.js` — **21 bytes** (no trailing newline):

```js
exports.evalExpr=eval
```

`evalExpr(s)` is the language's own evaluator, so it handles `+ - * /`,
integer and decimal literals, parentheses, normal precedence, unary minus
and whitespace exactly as specified — no hand-rolled parser can beat it
on byte count while staying correct on the hidden set.

## Tests

Run `node test/test.js`. It checks all 9 public cases from
`challenges/code-golf-expr/cases.json` plus 20 hidden-style cases
(unary minus, spaces, decimals, deep nesting, chained division).

Result (verified 2026-11-14): **29/29 pass**.
