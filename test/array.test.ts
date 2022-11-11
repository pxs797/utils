import { remove, unique } from "../src/array"

describe('array', () => {

  it('array item is unique', () => {
    expect(unique([1, 2, 2, 2, 3, 3])).toStrictEqual([1, 2, 3])
  })

  it('remove array item', () => {
    const array = [1, 2, 3, 4]
    remove(array, 4)
    expect(array).toStrictEqual([1, 2, 3])
  })
})