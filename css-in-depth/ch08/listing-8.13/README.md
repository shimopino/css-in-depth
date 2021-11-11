# Listing-8.13

レスポンシブデザインに対応するために、以下の設定でビューポート幅に合わせて動的にフォントサイズを決定するようにしていた。

```css
:root {
  box-sizing: border-box;
  font-size: calc(1vw + 0.6em);
}
```

そこで以下のメディアクエリを使用することで、フォントサイズの上限を設けることができる。

```css
@media (min-width: 50em) {
  :root {
    font-size: 1.125em;
  }
}
```
