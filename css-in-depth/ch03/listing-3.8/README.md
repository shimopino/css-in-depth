# Listing-3.8

`%` で外側の余白も設定することはできるが、`%` 自体は親要素の横幅に対する相対的な値であるため、`%` ではなくより具体的な値を使用して余白を設定したい。

このためには `calc()` 関数を利用することができる。

```css
.main {
  float: left;
  width: 70%;
  background-color: #fff;
  border-radius: 0.5em;
}

.sidebar {
  float: left;
  /* (30% - 1.5em) であればその意図が理解できる */
  width: calc(30% - 1.5em);
  margin-left: 1.5em;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 0.5em;
}
```

これで下記のように外側の余白に対して、フォントサイズを基準に余白の値を設定することが可能となり、親要素の横幅を意識する必要は無くなった。

![](assets/2021-10-23-15-43-37.png)
