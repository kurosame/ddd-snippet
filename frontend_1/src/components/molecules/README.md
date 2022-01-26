# `components/molecules`

Atomic Design の Molecules

## 実装方針

- atoms,molecules の UI コンポーネントを組み合わせて、意味を持つ要素となる
  - ただし、単一責任の原則であること
- ローカルステートは基本的に持たない
- コンテキストに依存しない
- ドメインに依存しない

## Example

- LabeledTextInput
  - 「ラベルが示す通りにテキストインプットへ入力する」という意味を持つ
