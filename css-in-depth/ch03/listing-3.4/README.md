# Listing-3.4

コンテナの高さや幅を指定した際に、その内側の余白や境界線の太さなども合わせて考慮するためには、CSS の `box-sizing` の値を変更する必要がある。

| property      | description                                        |
| :------------ | :------------------------------------------------- |
| `content-box` | コンテンツの高さと幅のみを指定する                 |
| `border-box`  | `padding` と `border` も合わせて高さと幅を指定する |

そこで以下のようにプロパティの値を変更する。

```css
.main {
  box-sizing: border-box; /* border-box に変更する */
  float: left;
  width: 70%;
  background-color: #fff;
  border-radius: 0.5em;
}

.sidebar {
  box-sizing: border-box; /* border-box に変更する */
  float: left;
  width: 30%;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 0.5em;
}
```

これで以下のように 1 行の中身コンテナが収まるようになった。

![](assets/2021-10-23-14-59-13.png)
