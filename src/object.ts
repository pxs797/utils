import { isObject } from "./is"

export const extend = Object.assign

export const isEmpty = (val: object): boolean => {
  if (!isObject(val)) return false
  return Object.keys(val).length === 0
}

export const isKeyIn = (obj: object, k: string): boolean => {
  return k in obj
}
