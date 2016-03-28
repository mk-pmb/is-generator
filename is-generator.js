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

/**
 * Have a real generator func for comparison.
 * It `return`s because `yield` caused an istanbul/mocha
 * Transformation error 'Unexpected token }'.
 */
function * aRealGeneratorFunc () { return }

/**
 * Alias the real gen-func constructor:
 *  1. To save a few CPU cycles for that one dot notation lookup.
 *  2. So no-one can tamper with our direct reference.
 */
var GenFuncCls = aRealGeneratorFunc.constructor

/**
 * Check whether a function is generator.
 *
 * @param  {Function} fn
 * @return {Boolean}
 */
function isGeneratorFunction (fn) {
  return (fn instanceof GenFuncCls)
}

/**
 * Export stuff.
 */
var EX = module.exports = isGenerator
EX.fn = isGeneratorFunction
EX.GeneratorFunctionClass = GenFuncCls
