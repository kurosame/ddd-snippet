# `domain/specification`

Specification（仕様）

## 概要

- Specification は複雑なルールをモデル化したドメインオブジェクトである

## 実装方針

- VO や Entity の責務を曖昧にする実装は Specification として外部に切り出す
  - VO や Entity の責務の明確化と肥大化を防ぐ
  - Specification として切り出した処理の再利用性を高める
- Specification は Application Service から呼び出す
- 必要に応じて、Repository を利用してよい
  - Repository は private と readonly で宣言する
    ```ts
    readonly #employeeRepository: EmployeeRepository
    ```
  - VO や Entity が Repository を操作するのは可能な限り避けるべき

## Specification の効果

- Application Service へのドメインルールの流出を防ぐ
  - Application Service は Specification の関数を呼ぶだけにする
- Repository へのドメインルールの流出を防ぐ
  - Repository の関数に引数として Specification を渡すようにする
