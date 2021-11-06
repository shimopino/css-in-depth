# Listing-8.1

レスポンシブデザインでは、以下の 3 原則が重要である。

1. モバイルファースト
   - デスクトップ版よりもまずはモバイル版のデザインを作成する
   - モバイル版は画面のスペースやネットワーク速度の面で制約が多いため、先にモバイルから作成しておくとデスクトップ版への移行は楽になる
2. `@media` クエリ
   - 特定の条件下で適用するスタイルを指定する
3. `fluid` レイアウト
   - ビューポートの幅を元にコンテナのサイズを変化させる

作成する画面としては、ヘッダーやヒーロー画像、メインコンテンツの構成となっている。

```html
<header id="header" class="page-header">
  <div class="title">
    <h1>Wombat Coffee Roasters</h1>
    <div class="slogan">We love coffee</div>
  </div>
</header>

<nav class="menu" id="main-menu">
  <button class="menu-toggle" id="toggle-menu">toggle menu</button>
  <div class="menu-dropdown">
    <ul class="nav-menu">
      <li><a href="/about.html">About</a></li>
      <li><a href="/shop.html">Shop</a></li>
      <li><a href="/menu.html">Menu</a></li>
      <li><a href="/brew.html">Brew</a></li>
    </ul>
  </div>
</nav>

<aside id="hero" class="hero">
  Welcome to Wombat Coffee Roasters! We are passionate about our craft, striving
  to bring you the best hand-crafted coffee in the city.
</aside>

<main id="main">
  <div class="row">
    <section class="column">
      <h2 class="subtitle">Single-origin</h2>
      <p>
        We have built partnerships with small farms around the world to
        hand-select beans at the peak of season. We then carefully roast in
        <a href="/batch-size.html">small batches</a>
        to maximize their potential.
      </p>
    </section>
    <section class="column">
      <h2 class="subtitle">Blends</h2>
      <p>
        Our tasters have put together a selection of carefully balanced blends.
        Our famous
        <a href="/house-blend.html">house blend</a>
        is available year round.
      </p>
    </section>
    <section class="column">
      <h2 class="subtitle">Brewing Equipment</h2>
      <p>
        We offer our favorite kettles, French presses, and pour-over cones. Come
        to one of our <a href="/classes.html">brewing classes</a> to learn how
        to brew the perfect pour-over cup.
      </p>
    </section>
  </div>
</main>
```

何もスタイルを当てていない状況では、ブラウザの横幅を `500px` に設定した場合には下記のように表示されている。

![](assets/2021-10-27-07-11-48.png)
