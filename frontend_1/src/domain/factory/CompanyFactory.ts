import { v4 } from 'uuid'

import { Company } from '@/domain/entity/Company'

export class CompanyFactory {
  public create(companyName: string): Company {
    return new Company(v4(), companyName)
  }
}
