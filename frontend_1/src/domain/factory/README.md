# `domain/factory`

Factory

## 概要

- Factory は複雑なオブジェクトの生成をカプセル化するオブジェクトである
  - ドメインモデルに関して責務は負わないが、ドメインモデルの一部ではある

## 実装方針

- Entity（集約）の生成（コンストラクター）が複雑で、Entity の責務を曖昧にする実装は Factory として外部に切り出す
- Factory は Application Service から呼び出し、Entity（集約）を戻り値として返す
