# Listing-6.8

今までは画面に配置するグリッドアイテムの数が事前に判明していたことを前提としていたが、実際には描画するアイテムをバックエンドから取得する場合にはグリッドアイテムの数が事前にわからない可能性がある。

`grid-template-*` を使用すれば明示的なグリッドレイアウトを構築することができるが、グリッドアイテム自体は明示的なトラックの外側にも配置することができる。

この挙動を確認するためのページを作成する。

```html
<div class="portfolio">
  <figure class="featured">
    <img src="../assets/images/monkey.jpg" alt="monkey" />
    <figcaption>Monkey</figcaption>
  </figure>
  <figure>
    <img src="../assets/images/eagle.jpg" alt="eagle" /> 2
    <figcaption>Eagle</figcaption>
  </figure>
  <figure class="featured">
    <img src="../assets/images/bird.jpg" alt="bird" />
    <figcaption>Bird</figcaption>
  </figure>
  <figure>
    <img src="../assets/images/bear.jpg" alt="bear" />
    <figcaption>Bear</figcaption>
  </figure>
  <figure class="featured">
    <img src="../assets/images/swan.jpg" alt="swan" />
    <figcaption>Swan</figcaption>
  </figure>
  <figure>
    <img src="../assets/images/elephants.jpg" alt="elephants" />
    <figcaption>Elephants</figcaption>
  </figure>
  <figure>
    <img src="../assets/images/owl.jpg" alt="owl" />
    <figcaption>Owl</figcaption>
  </figure>
</div>
```

いくつかの画像は他の画像よりも大きく表示するために `.featured` クラスを使用している。
