import { isArray } from "./is"

export const unique = <T>(array: T[]): T[] => Array.from(new Set(array))

export const remove = <T>(array: T[], val: T): boolean => {
  if (!isArray(array)) return false
  const index = array.indexOf(val)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}