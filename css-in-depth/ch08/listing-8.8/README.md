# Listing-8.8

モバイルファーストによるアプローチは以下の手順で実施する。

まずはモバイル版を想定したスタイルを作成する。

```css
.title > h1 {
  color: #333;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: 0.2em 0;
}
```

そのあと、1 つ大きなブレークポイントに対してスタイルを作成する。

```css
@media (min-width: 35em) {
  .title > h1 {
    font-size: 2.25rem;
  }
}
```

最後にデスクトップ版などの大きなブレークポイントに対してスタイルを適用していく流れである。

```css
@media (min-width: 50em) {
  .title > h1 {
    font-size: 3rem;
  }
}
```
