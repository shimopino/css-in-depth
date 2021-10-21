# Listing-1.3

スタイルの適用順序

1. スタイルシートの読み込み元
   - 作成した CSS とブラウザのデフォルトスタイルと合わせて適用される
     - 作成した CSS（`author style`）
     - ブラウザのデフォルトスタイル（`user agent style`）
   - `user agent style` の優先度は低い
2. セレクタの詳細度
3. CSS ファイル内での順序

ユーザーエージェントスタイルではデフォルトで以下が適用される。

> `user agent style`
>
> - ヘッダー（`<h1>, ..., <h6>`）やパラグラフの上下の余白
> - リスト（`<li>`）の左余白
> - URL リンクのデフォルトテキストカラー
> - デフォルトのフォントサイズ

```css
h1 {
  color: #2f4f4f;
  margin-bottom: 10px;
}

#main-nav {
  margin-top: 10px;

  /* ユーザーエージェントスタイルを無効化する */
  list-style: none;
  padding-left: 0;
}

#main-nav li {
  /* ブロックとして改行されるので、インラインスタイルに変更 */
  display: inline-block;
}

#main-nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;

  /* ユーザーエージェントスタイルを無効化する */
  text-decoration: none;
}
```
