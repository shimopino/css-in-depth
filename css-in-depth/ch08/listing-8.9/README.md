# Listing-8.9

フォント以外に関しても、モバイルデザインとデスクトップデザインを考慮する。

まずはモバイル版のスタイルを定義して、メディアクエリを使用して特定の条件下でスタイルを上書きするように設定する。

ヘッダに関しては、デバイス幅が広がった場合に余白を多く取得するようにする。

```css
.page-header {
  padding: 0.4em 1em;
  background-color: #fff;
}

@media (min-width: 35em) {
  .page-header {
    padding: 1em;
  }
}
```

ヒーロー画像などもデスクトップ版に合わせてフォントサイズや余白を大きめに確保しておく。

```css
.hero {
  padding: 2em 1em;
  text-align: center;
  background-image: url(coffee-beans.jpg);
  background-size: 100%;
  color: #fff;
  text-shadow: 0.1em 0.1em 0.3em #000;
}

@media (min-width: 35em) {
  .hero {
    padding: 5em 3em;
    font-size: 1.2rem;
  }
}
```

メインコンテンツ内もデスクトップ版での見た目を想定して余白を確保する。

```css
main {
  padding: 1em;
}

@media (min-width: 35em) {
  main {
    padding: 2em 1em;
  }
}
```
