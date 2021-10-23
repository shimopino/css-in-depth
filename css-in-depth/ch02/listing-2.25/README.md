# Listing-2.25

一度宣言したカスタムプロパティは、再利用することが可能となるので、下記のようにページ全体で配色を統一したい場合に、変数にカラーコードを格納しておくと便利である。

```css
:root {
  --main-font: Helvetica, Arial, sans-serif;
  --brand-color: #369;
}

p {
  /* var() で変数を参照できる */
  font-family: var(--main-root);
  color: var(--brand-color);
}
```
