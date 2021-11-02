# Listing-7.5-relative

`position: relative;` の挙動を確認するために、以下の HTML 構造を実験的に用意する。

```html
<body>
  <p class="inline">サンプル</p>
  <p class="inline inline__shifted">サンプル</p>
  <p class="inline">サンプル</p>
  <p class="inline">サンプル</p>
</body>
```

これで以下のようにインライン要素としてのスタイルを適用する。

```css
.inline {
  display: inline;
  padding: 0.5em;
  background-color: darkgray;
  border: 1px solid black;
}
```

![](assets/2021-10-26-19-04-22.png)

これで以下のように `position: relative;` を適用して、`top`, `left` を指定する。

```css
.inline__shifted {
  position: relative;
  top: 1em;
  left: 2em;
}
```

こうすることで以下のように元の配置から離れた場所に、インライン要素がずれており、他のインライン要素の上に被っていることがわかる。なおこのプロパティにより要素の大きさが変化することはなく、あくまでも上下左右に要素を動かすだけである。

![](assets/2021-10-26-19-07-56.png)

> 大抵の場合は、相対的な位置を調整するわけではなく、`position: absolute;` を使用して要素の配置を決めるために使用される。
