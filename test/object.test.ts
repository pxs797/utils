import { extend, isEmpty, isKeyIn } from "../src/object"

describe('object', () => {
  it('extend another object', () => {
    const target = {}
    const sourse = {
      a: 1
    }
    extend(target, sourse)
    expect(target).toStrictEqual({ a: 1 })
  })

  it('check ojbect is empty', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('key in object is true', () => {
    expect(isKeyIn({ a: 1 }, 'a')).toBe(true)
  })
})