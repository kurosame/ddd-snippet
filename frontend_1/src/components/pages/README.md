# `components/pages`

Atomic Design の Pages

## 実装方針

- Atoms,Molecules,Organisms の UI コンポーネントを組み合わせて、画面を作成する
- 必ず 1 つの Templates をルート要素として配置する
- Pages は Router から呼び出される
- コンテキストに依存する
  - ただし、Organisms 単体で扱えない範囲のコンテキストのみに限定する
- ドメインに依存する
  - ただし、Organisms 単体で扱えない範囲のドメインのみに限定する
