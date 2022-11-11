export const isNumber = val => typeof val === 'number'

export const isString = val => typeof val === 'string'

export const isArray = val => Array.isArray(val)

export const isFunction = val => typeof val === 'function'

export const isObject = val => val.toString() === '[object Object]'

export const isNull = val => val === null

export const isDef = val => typeof val !== 'undefined'
