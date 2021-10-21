# Listing-1.18

以下のように 1 つのルールで複数の値を設定した場合、指定していないものがデフォルト値が適用される。

```css
h1 {
  font-weight: bold;
}

.title {
  font: 32px Helvetica, Arial, sans-serif;
}
```

これは以下のように解釈される。

```css
h1 {
  font-weight: bold;
}

.title {
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: normal;
  font-size: 32px;
  font-family: Helvetica, Arial, sans-serif;
}
```

たとえ `font-weight` を明示的に設定していなくとも、デフォルトの値が適用されたことになるため、文字は太字になることはない。
