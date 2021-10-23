# Listing-2.27

カスタムプロパティは、セレクタ内で異なる値を同じ変数名に割り当てることも可能である。

変数の値を動的に変更して挙動を確認するために、下記の HTML を用意する。

```html
<body>
  <div class="panel">
    <h2>Single-origin</h2>
    <div class="body">
      We have built partnerships with small farms around the world to
      hand-select beans at the peak of season. We then careful roast in small
      batches to maximize their potential.
    </div>
  </div>

  <aside class="dark">
    <div class="panel">
      <h2>Single-origin</h2>
      <div class="body">
        We have built partnerships with small farms around the world to
        hand-select beans at the peak of season. We then careful roast in small
        batches to maximize their potential.
      </div>
    </div>
  </aside>
</body>
```

これは下記のように描画されている。

![](assets/2021-10-23-11-40-22.png)
