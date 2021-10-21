# Listing-1.6

セレクタのクラスと ID では、適用される数によって優先順位が逆転することはない。

```css
/* 詳細度 (id, class, element) */
/* (0, 0, 4) */
html body header h1 {
  color: blue;
}

/* (0, 1, 3) */
body header.page-header h1 {
  color: orange;
}

/* (0, 2, 0) */
.page-header .title {
  color: green;
}

/* (1, 0, 0) */
#page-title {
  color: red;
}
```

これは擬似クラス（`:hover`）や属性セレクタ（`[type="input"]`）を使用しても同じである。
