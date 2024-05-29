/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;

  let sPointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[sPointer]) continue;

    sPointer++;
    if (sPointer === s.length) return true;
  }

  return false;
};
