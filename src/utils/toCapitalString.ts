/**
 * 将字符串的首字母大写
 * @param str
 * @returns
 */
export const toCapitalString = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};
