export class EmployeeFetchCommand {
  public cache: unknown
  public mutate: unknown

  public constructor(cache: unknown, mutate: unknown) {
    this.cache = cache
    this.mutate = mutate
  }
}
