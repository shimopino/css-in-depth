# Listing-2.26

`var()` 関数は第 2 引数を受け取ることもでき、第 1 引数に指定した変数の値が何も格納されていない場合に適用する、デフォルト値のような形式で設定することが可能となる。

```css
:root {
  --main-font: Helvetica, Arial, sans-serif;
  --brand-color: #369;
}

p {
  font-family: var(--main-font, sans-serif);
  /* 変数が宣言されていないので、blue の配色が採用される */
  color: var(--secondary-color, blue);
}
```

もしも参照している変数の値が、対象のプロパティに適したものではない場合、対象のプロパティの初期値が適用される点には注意が必要である。

```css
p {
  /* padding にはカラーコードを指定することはできない */
  /* 初期値である 0 が設定される */
  padding: var(--brand-color);
}
```
