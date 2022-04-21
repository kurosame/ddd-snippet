import { CompanyId } from '@/domain/vo/CompanyId'
import { CompanyName } from '@/domain/vo/CompanyName'

export class Company {
  public readonly companyId: CompanyId
  public readonly companyName: CompanyName

  public constructor(companyId: string, companyName: string) {
    this.companyId = new CompanyId(companyId)
    this.companyName = new CompanyName(companyName)
  }
}
