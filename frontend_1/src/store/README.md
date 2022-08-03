# `store`

Global state

## Recoil

### 概要

- クライアントで生成した Global state は Recoil で管理する

### 実装方針

## SWR

### 概要

- サーバーから取得した Global state は SWR で管理する

### 実装方針

- SWR は Organisms で呼び出し、Command に cache と mutate を渡す
  - SWR はカスタムフックなので、関数コンポーネントのトップレベルで呼び出す必要がある
- fetcher の取得系メソッドで cache があれば cache を返し、cache がなければ fetch する
- fetcher の更新系メソッドでエンドポイントに紐づくキャッシュをすべて削除する
  - ユースケースに合わせたキャッシュ削除は共通化が難しいので、一律全削除にする
  - もし、個別にキャッシュ操作する必要がある場合は、各 Repository で実装する
    - ただし、Repository ではキャッシュ周りの操作は基本的に行わない
