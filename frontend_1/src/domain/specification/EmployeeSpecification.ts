import { General } from '@/core/General'
import type { Company } from '@/domain/entity/Company'
import type { Employee } from '@/domain/entity/Employee'

export class EmployeeSpecification {
  public isExists(employee: Employee | null): void {
    if (General.isNotEmpty(employee)) throw new Error('この社員はすでに登録済みです')
  }

  public isBelongCompany(employee: Employee, company: Company): void {
    if (employee.employeeId.id.toLowerCase().slice(0, 1) === 'a' && company.companyName.name !== '株式会社A')
      throw new Error('会社名は株式会社Aを指定してください')
  }
}
