/**
 * 返回 hello 开头的字符串
 * @param name - input string
 * @returns 'hello xxx'
 * @example
 * ```ts
 * sayHello('utils') => 'hello utils'
 * ```
 * @beta
 * @author Mark Peng
 */
export function sayHello(name: string): string {
  return `hello ${name}`
}