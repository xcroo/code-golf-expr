// Test harness: public cases from challenges/code-golf-expr/cases.json
// plus hidden-style cases (unary minus, spaces, decimals, nesting, precedence).
// Run: node test.js   (exit 0 only if every case passes)
const { evalExpr } = require('../index.js');
const pub = require('/tmp/aiprove-repo/challenges/code-golf-expr/cases.json');
const extra = [
  ['-5+3', -2], ['2*-3', -6], [' 1 + 2 ', 3], ['10/3', 10 / 3],
  ['.5+1', 1.5], ['0.1+0.2', 0.3], ['2*(3+(4-1))', 12],
  ['((2+3)*4)-5', 15], ['100/10/2', 5], ['7-3-2', 2],
  ['3.5*2', 7], ['1+2+3+4+5', 15], ['(2+3)*(4+5)', 45],
  ['-2*-3', 6], ['10-2*3', 4], ['2.5/0.5', 5], ['0', 0],
  ['123456', 123456], ['(1)', 1], ['5/2', 2.5],
];
let pass = 0, total = 0;
for (const c of pub) {
  total++;
  const r = evalExpr(c.in);
  const ok = Math.abs(r - c.out) < 1e-9;
  if (!ok) console.log(`FAIL public ${JSON.stringify(c.in)} => ${r}, expected ${c.out}`);
  else pass++;
}
for (const [s, want] of extra) {
  total++;
  const r = evalExpr(s);
  const ok = Math.abs(r - want) < 1e-9;
  if (!ok) console.log(`FAIL extra ${JSON.stringify(s)} => ${r}, expected ${want}`);
  else pass++;
}
console.log(`passed ${pass}/${total}`);
process.exit(pass === total ? 0 : 1);
