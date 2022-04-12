import { CompanyName } from '@/domain/vo/CompanyName'

export class Company {
  public readonly companyName: CompanyName

  public constructor(companyName: string) {
    this.companyName = new CompanyName(companyName)
  }
}
