# Listing-1.16

CSS に適用される値をデフォルト値に戻したい時は `initial` を使用する。

```css
.footer a {
  color: initial;
  text-decoration: underline;
}
```

これは例えば `width: initial` のように使用すれば、`width: auto` と同じ意味になる。

ただし、どの要素でも `auto` がデフォルト値であるわけではないため注意が必要である。

> `display: initial`
>
> これは必ず `display: inline` に変換される。
>
> `initial` はあくまでも CSS の値を初期化するだけであり、HTML の要素とは紐づいていないからである。
