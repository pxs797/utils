import { sayHello } from "../src/index"

describe('say', () => {
  it('hello', () => {
    expect(sayHello('jest')).toEqual('hello jest')
  })
})