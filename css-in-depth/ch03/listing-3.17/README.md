# Listing-3.17

今は下記のようにそれぞれのリンクの上下の余白が設定されていない状況である。

![](assets/2021-10-23-18-37-21.png)

選択肢としては以下の 2 つが存在している。

- 上下の `margin` を別々に指定する
- 上下の `margin` を両方とも指定して、**collapsing** を利用する

そこで以下のように上側の余白を指定する。

```css
.button-link {
  display: block;
  padding: 0.5em;
  color: #fff;
  background-color: #0090c9;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  /* 上側の余白を指定する */
  margin-top: 1.5em;
}
```

しかし、一番上の要素にも上側の余白を設定しているため、上側に余分な余白が設定されていることがわかる。

![](assets/2021-10-23-18-45-19.png)

そこで以下のように **combinator (+)** を使用して、`.button-link` クラスが指定されている要素の次の `.button-link` 要素に対してのみ上側の余白を設定することができる。

```css
.button-link + .button-link {
  margin-top: 1.5em;
}
```

これで以下のように上側に余分な余白が設定されることは無くなった。

![](assets/2021-10-23-18-49-11.png)
