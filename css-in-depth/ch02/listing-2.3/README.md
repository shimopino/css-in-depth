# Listing-2.3

相対値を使用すれば、異なるフォントサイズの設定に合わせて余白を自動的に調整することも可能となる。

```css
.box {
  padding: 1em;
  border-radius: 1em;
  background-color: lightgray;
}

/* このクラスを適用している要素は 1em = 12px */
.box-small {
  font-size: 12px;
}

/* このクラスを適用している要素は 1em = 18px */
.box-large {
  font-size: 18px;
}
```
