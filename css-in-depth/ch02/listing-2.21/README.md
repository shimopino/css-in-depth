# Listing-2.21

CSS では単位系が存在していないプロパティもあり、例えば `font-weight` や `z-index` などは、ただの数値を指定するプロパティである。

ただし、`line-height` に関しては単位系がある値とただの数値の両方を指定することができる。この挙動を確認するためにまずは下記の HTML を用意する。

```html
<body>
  <p class="about-us">
    We have built partnerships with small farms around the world to hand-select
    beans at the peak of season. We then carefully roast in small batches to
    maximize their potential.
  </p>
</body>
```

そして下記の CSS を適用する。

```css
body {
  /* 1行の高さはフォントサイズをもとに 32px * 1.2 = 38.4px と計算される */
  line-height: 1.2;
}

.about-us {
  /* ブラウザのデフォルトフォントサイズを 16px とする */
  /* フォントサイズは 32px となる */
  font-size: 2em;
}
```
