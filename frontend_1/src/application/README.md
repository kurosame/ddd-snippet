# `application`

Application Service

## `usecase`

Usecase

### 概要

- Application Service はドメインオブジェクトを利用し、ユースケースを実現するオブジェクトである

### 実装方針

- Application Service は属性を保持しない
  - ステートレスであること
- class 構文は使わず、関数を export する
  - Domain Service や Repository の実装をコンストラクター経由で DI する必要がないから
- Application Service の関数の入出力にドメインオブジェクトを含めない
  - Application Service のクライアントにドメインオブジェクトを公開しない
  - 入力は Command にする
  - 出力は DTO にする
- Application Service の関数にビジネスロジックを実装しない
  - 関数はドメインオブジェクトの実行だけ行う
- 必要に応じて、Application Service のインターフェイスを作成してよい
  - インターフェイスがあると、実装とモックオブジェクトを適宜 DI して切り替えることができる

## `command`

Command

### 概要

- Command はクライアントから Application Service への命令の詳細をカプセル化したオブジェクトである

### 実装方針

- Command の属性の型はプリミティブ型にする
- Application Service の関数の引数は Command のインスタンスを渡す
  - ドメインの仕様が変更されても関数の引数を変更せず、Command を修正するだけでよい

### Command は Facade

Command は Application Service の Facade の役割を担う  
クライアントは Command（Facade）を経由することで、ドメインの詳細を知る必要がなくなる  
よって、クライアントと Application Service の独立性を高めることができる

## `dto`

Data Transfer Object（DTO）

### 概要

- DTO はドメインデータをクライアント用に変換したものを保持するオブジェクトである
  - ドメインオブジェクトを直接クライアントに公開することを回避できる

### 実装方針

- DTO への詰め替えは Application Service で行う
- DTO のコンストラクターでドメインオブジェクトを受け取り、それをバラして属性にセットする
- DTO は関数を持たない
