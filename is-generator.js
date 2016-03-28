/**
 * Check whether an object is a generator.
 *
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isGenerator (obj) {
  return obj &&
    typeof obj.next === 'function' &&
    typeof obj.throw === 'function'
}

function * aRealGeneratorFunc () {
  return { cannot: 'yield', 'istanbul/mocha Transformation error': {
    index: 393, lineNumber: 19, column: 42,
    description: 'Unexpected token }' } }
}

/**
 * Check whether a function is generator.
 *
 * @param  {Function} fn
 * @return {Boolean}
 */
function isGeneratorFunction (fn) {
  return (fn instanceof aRealGeneratorFunc.constructor)
}

/**
 * Export stuff.
 */
var EX = module.exports = isGenerator
EX.fn = isGeneratorFunction
