# Listing-9.4

これで以下のようなメッセージのスタイルを作成することができた。

```css
.message {
  padding: 0.8em 1.2em;
  border-radius: 0.2em;
  border: 1px solid #265559;
  color: #265559;
  background-color: #e0f0f2;
}
```

しかし、このメッセージ自体の枠や余白などを保ったまま、エラーメッセージでも適用できるようにテキストカラーや背景色などを変更できるようにする。

そこで以下のように `modifier` と呼ばれる修飾子をセレクタ名に追加することで、特定のスタイルのみを変更できるようにする。

```css
.message--success {
  color: #3f5926;
  border-color: #2f5926;
  background-color: #cf38c9;
}

.message--warning {
  color: #594826;
  border-color: #594826;
  background-color: #e8dec9;
}

.message--error {
  color: #59262f;
  border-color: #59262f;
  background-color: #e8c9cf;
}
```

これでモジュール全体を再定義するのではなく、変更する部分だけをオーバーライドするようにできる。
