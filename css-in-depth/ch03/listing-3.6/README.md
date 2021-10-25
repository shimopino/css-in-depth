# Listing-3.6

**Universal Selector** を使用して `border-box` を指定する場合、この考え方を前提にしていないサードパーティライブラリの CSS を使用すると、コンポーネントのレイアウトが崩れてしまう可能性が存在している。

なぜなら、Universal Selector は外部のライブラリも含めて全ての要素に対してスタイルが適用されてしまうからである。

この状態を修正するには、`author` スタイルにのみ `border-box` を指定して、Universal Selector には外部のライブラリも考慮して、`box-sizing` を継承させればいい。

```css
:root {
  box-sizing: border-box;
}

,
::before,
::after {
  box-sizing: inherit;
}
```

通常 `box-sizing` は子要素に対して継承されないプロパティではあるが、`inherit` 値を指定することで、強制的に子要素に継承させることが可能となる。

つまり外部ライブラリを下記のように指定すれば、その設定を保つことができるようになる。

```css
.third-party-component {
  box-sizing: content-box;
}
```

プロジェクトの開始時に上記の設定を追加するのがおすすめである。
