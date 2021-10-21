# Listing-1.7

以下の CSS では、詳細度の優先順位により、オレンジ色の背景色を適用することができない。

```css
#main-nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

.featured {
  background-color: orange;
}
```

適用するための 1 つの手法は、以下のように `!important` を使用することである。

```css
#main-nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

.featured {
  /* こちらが優先される */
  background-color: orange !important;
}
```
