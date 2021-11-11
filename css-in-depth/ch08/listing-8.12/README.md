# Listing-8.12

レスポンシブレイアウトの原則の 1 つは **Fluid Layout** であり、ビューポートの幅に合わせて拡大・縮小するコンテナを使用することである。

Fluid Layout では、メインコンテンツのコンテナは明示的な幅を有しておらず、`%` で定義されており、左右の `padding` や `margin` を自動調整することで、ビューポートの端との間に余裕を持たせることができる。

フレックスレイアウトの場合には `flex-grow` や `flex-shrink` などを使用すれば、画面の幅に関係なくアイテムを収めることができる。

```css
@media (min-width: 50em) {
  .page-header {
    padding: 1em 4em;
  }
}

@media (min-width: 50em) {
  .hero {
    padding: 7em 6em;
  }
}

@media (min-width: 50em) {
  main {
    padding: 2em 4em;
  }
}

@media (min-width: 50em) {
  .nav-menu {
    padding: 0em 4em;
  }
}
```
