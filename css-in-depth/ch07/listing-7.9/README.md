# Listing-7.9

`z-index` は位置を調整した要素同士の高さを調整する際に便利なプロパティである。

しかし 1 つの要素に `z-index` を指定すると、その要素をルートとして新しいスタッキングコンテキストが作成されてしまい、その子孫要素は全てそのスタッキングコンテキストの一部となる。

この挙動を以下の HTML を使って確認する。

```html
<div class="box one positioned">
  one
  <div class="absolute">nested</div>
</div>
<div class="box two positioned">two</div>
<div class="box three">three</div>
```
