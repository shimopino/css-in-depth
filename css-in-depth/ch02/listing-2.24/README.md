# Listing-2.24

宣言されたカスタムプロパティを使用する場合には、`var()` 関数を使用する。

```css
:root {
  --main-font: Helvetica, Arial, sans-serif;
}

p {
  /* var() で変数を参照できる */
  font-family: var(--main-root);
}
```
