# Listing-1.5

セレクタのクラスと ID では、詳細度は ID が上位となる。

そのため、下記のようなスタイルが存在していた場合、`#main-nav a` のスタイルが優先される。

```html
<nav>
  <ul class="nav" id="main-nav">
    <li><a href="/">Home</a></li>
    <li><a href="/coffees">Coffees</a></li>
    <li><a href="/browsers">Browsers</a></li>
    <li>
      <a href="/specials" class="featured">Specials</a>
    </li>
  </ul>
</nav>
```

後から宣言された `featured` クラスに対する背景色の変更は、ID された背景色を上書きすることはない。

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
