# Listing-1.11

以下のように詳細度が同じレベルの場合に、ソースコード上の順番を意識するようにした場合、HTML の構造によってはスタイルが適用されない可能性もある。

```css
/* (0, 1, 1) */
.nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

/* (0, 1, 1) */
a.featured {
  background-color: orange;
}
```

例えば以下のような構造の場合、`<a>` タグに対して `featured` クラスを割り当てた要素が他の箇所に存在している場合には、意図せずオレンジ色が適用されてしまう。

```html
<header class="page-header">
  <h1 id="page-title" class="title">Wombat Coffee Roasters</h1>
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
</header>
<main>
  <p>
    Be sure to check out
    <!-- ここにオレンジ色が適用されてしまう -->
    <a href="/specials" class="featured">out specials</a>
  </p>
</main>
```
