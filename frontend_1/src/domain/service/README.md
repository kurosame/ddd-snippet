# `domain/service`

Domain Service

## 概要

- Domain Service は VO や Entity に実装すると不自然となるふるまい（関数）を保持するドメインオブジェクトである

## 実装方針

- Domain Service は属性を保持しない
  - ステートレスであること
- 可能な限り、Domain Service ではなく VO や Entity で実装することを考える
  - ドメインモデル貧血症を避ける
- 必要に応じて、Repository を利用してよい
  - Repository は実装をコンストラクター経由で DI する必要があるので、Repository の実装のインスタンス（型はインターフェイス）を属性に持ってよい
  - Repository は private と readonly で宣言する
    ```ts
    readonly #employeeRepository: EmployeeRepository
    ```
- 必要に応じて、Domain Service のインターフェイスを作成してよい
  - インターフェイスはドメイン内に置き、Service の実装はドメイン外に置き、分離して管理するほうがよい（セパレートインターフェイス）
    - これによって、クライアントも実装もインターフェイスに依存させることができる

## Application Service との責務の違い

- ビジネスロジックはドメインオブジェクトに実装し、Application Service には実装しない
- Application Service はドメインオブジェクトのクライアントとして動作することになる
  - よって、Application Service が持つべき唯一のビジネス的な責務は、ドメインロジックを実行することである
