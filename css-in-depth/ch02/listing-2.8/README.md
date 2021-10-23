# Listing-2.8

`em` はその性質上、複雑にネストされた要素のフォントサイズの指定に使用すると、意図しないフォントサイズの変更を引き起こしてしまう可能性が存在する。

複数のネストが発生しているリスト要素に対して、上記を検証するために以下の CSS を用意する。

```css
body {
  font-size: 16px;
}

ul {
  font-size: 0.8em;
}
```

これで以下のような HTML を適用してみる。

```html
<!-- 16px * 0.8 -->
<ul>
  <li>Top Level</li>
  <!-- 16px * 0.8 * 0.8 -->
  <ul>
    <li>Second Level</li>
    <!-- 16px * 0.8 * 0.8 * 0.8 -->
    <ul>
      <li>Third Level</li>
      <!-- 16px * 0.8 * 0.8 * 0.8 * 0.8 -->
      <ul>
        <li>Fourth Level</li>
        <!-- 16px * 0.8 * 0.8 * 0.8 * 0.8 * 0.8 -->
        <ul>
          <li>Fifth Level</li>
        </ul>
      </ul>
    </ul>
  </ul>
</ul>
```

これは下記のように描画される。

![](assets/2021-10-23-06-24-52.png)
