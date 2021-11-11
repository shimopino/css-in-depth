# Listing-8.15

画像のサイズは注意が必要であり、モバイル環境ではユーザーの帯域制限にも影響を受けるため、圧縮や画像サイズなどの考慮する必要がある。

ベストプラクティスはそれぞれ異なる解像度の画像をいくつか作成しておくことである。

```css
.hero {
  padding: 2em 1em;
  text-align: center;
  background-image: url(../assets/images/coffee-beans-small.jpg);
  background-size: 100%;
  color: #fff;
  text-shadow: 0.1em 0.1em 0.3em #000;
}

@media (min-width: 35em) {
  .hero {
    padding: 5em 3em;
    font-size: 1.2rem;
    background-image: url(../assets/images/coffee-beans-medium.jpg);
  }
}

@media (min-width: 50em) {
  .hero {
    padding: 7em 6em;
    background-image: url(../assets/images/coffee-beans.jpg);
  }
}
```

これで各ビューポートのサイズに合わせて使用する画像サイズを変更することができる。
