import { General } from '@/core/General'

export class CompanyName {
  public readonly name: string

  public constructor(name: string) {
    if (General.isEmpty(name)) throw new Error('会社名は必須です')
    this.name = name
  }
}
