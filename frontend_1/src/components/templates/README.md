# `components/templates`

Atomic Design の Templates

## 実装方針

- ページ全体のレイアウトを構築する
  - Templates は Nuxt.js の Layouts のようなイメージ
- Atoms,Molecules,Organisms の UI コンポーネントから作成された共通レイアウトを配置する
- 共通レイアウト以外は Pages で配置し、Pages から children で受け取る
- コンテキストに依存しない
- ドメインに依存しない

## Example

- ヘッダーやフッターなどの共通レイアウト
