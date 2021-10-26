# Listing-4.13

下記のグリッドを採用した場合、行が増えても `.clearfix` クラスを追加する必要がないように、新たに CSS のスタイルを適用する。

```html
<main class="main clearfix">
  <h2>Running tips</h2>

  <div class="row">
    <div class="column-6"></div>
    <div class="column-6"></div>
  </div>

  <div class="row">
    <div class="column-6"></div>
    <div class="column-6"></div>
  </div>
</main>
```

ここでは以下のようなクリアフィックスを使用する。

```css
.row::after {
  content: " ";
  display: block;
  clear: both;
}
```
