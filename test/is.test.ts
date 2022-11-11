import { isNumber, isString, isFunction, isArray, isObject, isNull, isDef } from "../src/is";

describe('is', () => {
  it('number', () => {
    expect(isNumber(1)).toBe(true)
  })

  it('string', () => {
    expect(isString('1')).toBe(true)
  })

  it('function', () => {
    expect(isFunction(() => true)).toBe(true)
  })

  it('array', () => {
    expect(isArray([])).toBe(true)
  })

  it('object', () => {
    expect(isObject({})).toBe(true)
  })

  it('null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('def', () => {
    expect(isDef('1')).toBe(true)
  })
})