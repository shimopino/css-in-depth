# Listing-1.13

CSS には、対象のルールに属性値が設定されていない場合、親要素で概要する属性値を継承するルールが存在している。

例えば、`<body>` タグにフォント設定を行なっていた場合、`<body>` 以下に同じフォントの属性値が継承される。

デフォルトで全ての属性値が継承されるわけではなく、主にテキストに関係する値は継承される設定となっている。

- `color`
- `font`
- `font-family`
- `font-size`
- `text-align`
- `text-indent`
- `text-transform`
- `white-space`
- `word-spacing`

他にもいくつか継承されるルールは存在している。

- リスト
  - `list-style`
  - `list-style-type`
  - `list-style-position`
  - `list-style-image`
- テーブル
  - `border-collapse`
  - `border-spacing`

実際に以下のようにスタイルを指定すれば、全ての要素にフォント設定が適用される。

```css
body {
  font-family: sans-serif;
}
```
