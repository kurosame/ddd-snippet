export class General {
  public static isEmpty(a: unknown): boolean {
    return a === null || a === undefined || (typeof a === 'string' ? a === '' : false)
  }

  public static isNotEmpty(a: unknown): boolean {
    return !General.isEmpty(a)
  }
}
