import { General } from '@/core/General'

export class CompanyId {
  public readonly id: string

  public constructor(id: string) {
    if (General.isEmpty(id)) throw new Error('会社IDは必須です')
    this.id = id
  }
}
