# `domain/model`

Model（ドメインモデル）  
※ ddd-snippet ではこのディレクトリは利用していない

## 概要

- Model は Aggregate（集約）単位のドメインモデルを配置する

## ディレクトリ構成

Model を採用した場合のディレクトリ構成は以下になる  
`domain/model/各Aggregate`配下には Root Entity、Entity、VO、Repository Interface を配置する

```
domain
├── model
│   ├── company
│   │   ├── Company.ts
│   │   └── CompanyName.ts
│   └── employee
│       ├── Employee.ts
│       ├── EmployeeId.ts
│       ├── EmployeeName.ts
│       └── EmployeeRepository.ts
├── repository
│   └── Repository.ts
├── service
│   └── EmployeeService.ts
└── specification
    └── EmployeeSpecification.ts
```
