# Listing-2.20

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
