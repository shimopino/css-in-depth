# Listing-5.8

メインコンテンツとサイドバーの幅を調整するために、以前は `flex-grow` を利用して、比率ベースで対象のアイテムの幅を拡大させる方法を採用していた。

```css
.column-main {
  flex: 2;
}

.column-sidebar {
  flex: 1;
}
```

カラムの幅を決定するには、下記のように `flex-basis` で直接 `%` を指定する方法も採用することができる。この場合には、`margin-left: 1.5em;` が設定されているため左右方向にはみ出してしまうが、`flex-shrink: 1` も自動的に適用されるため、はみ出した分はそれぞれのアイテムから `0.75em` だけ差し引かれることでコンテナに収まるようになる。

```css
.column-main {
  flex: 66.67%;
}

.column-sidebar {
  flex: 33.33%;
}
```

これら 2 つの違いは、以下の HTML 構造から読み取れる。

```html
<main class="flex">
  <div class="column-main tile"></div>

  <div class="column-sidebar">
    <div class="tile"></div>
    <div class="tile centered"></div>
  </div>
</main>
```

`.column-main` 要素は同時に `.tile` 要素でもあるため `padding` が設定されている。しかし、`column-sidebar` 要素は `tile` 要素ではないため `padding` が設定されていない。

そのため `flex-grow` をベースとして余白調整の場合、この余白分（`3em`）だけメインコンテンツは大きくなってしまう。

もしもこの状態を回避したい場合は、自動的にアイテムの幅を拡大させる `flex-grow` ではなく、`%` で直接アイテムの幅を調整することのできる `flex-basis` を利用した方法を採用すべきである。
