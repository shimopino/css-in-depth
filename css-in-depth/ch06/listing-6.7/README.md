# Listing-6.7

各グリッドアイテムを、どの領域に配置するのか決定するために、下記の画面で表示されている `grid line` の行と列の番号を指定していた。

![](assets/2021-10-25-21-56-11.png)

グリッドレイアウトでは、`grid area` に対して特定の命名を与えることで、命名を指定することでグリッドアイテムをどの行と列に配置するのか決定することができる。

例えば以下のようにグリッドエリアを指定する。

```css
.container {
  display: grid;
  grid-template-areas:
    "title title"
    "nav nav"
    "main aside1"
    "main aside2";
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, auto);
}
```

こうすることでヘッダー要素に対して以下のようにグリッドエリアの名称を指定して、グリッドアイテムを配置することが可能となる。

```css
header {
  grid-area: title;
}
```

グリッドエリアに対する名称は、以下のように空のグリッドセルを囲むように定義することができる。

```css
.container {
  display: grid;
  grid-template-areas:
    "top  top    right"
    "left .      right"
    "left bottom bottom"
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, auto);
}
```
