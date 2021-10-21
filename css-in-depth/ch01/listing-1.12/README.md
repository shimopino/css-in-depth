# Listing-1.12

擬似クラスを使用する場合、詳細度とソースコード上での順番が重要となっている。

例えば以下のようなスタイルを考える。

```css
a:link {
  color: blue;
  text-decoration: none;
}

a:visited {
  color: purple;
}

a:hover {
  text-decoration: underline;
}

a:active {
  color: red;
}
```

この場合、すでに訪れたリンク（`:visited`）上をマウスでホバー（`:hover`）した場合、ソースコード上で後から宣言されている `:hover` が優先される。

こうした順番で以下のように覚えるといい。

> LoVe/HAte
>
> - link
> - visited
> - hover
> - active

このように最終的に要素に対して適用されるスタイルを `cascaded value` と呼んでいる。

スタイル適用においては、以下のようなベストプラクティスが知られている。

- `id` をセレクタとして使用しない
  - 一意にするための命名規則などが必要となってしまう
  - 詳細度が最も高いため上書きすることが難しい
- `!important` を使用しない
  - 上書きするには、ソースコード上の `!important` を調べる必要がある
