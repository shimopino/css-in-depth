# Listing-9.1

既存の CSS に対してスタイルを変更すると意図していなかった箇所のスタイルまで変更されてしまうことがよくある。

そこでカプセル化を意識して、ナビゲーションメニューやプログレスバーなどの、ページ上に存在する個別のコンポーネントごとに CSS のスタイルの影響範囲が閉じるようにする。

その上では、以下の例ようにページ全体で適用するスタイルをまず最初に調整する必要がある。

```css
:root {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: Helvetica, Arial, sans-serif;
}
```

他にもリンクのデフォルトカラーや、見出しのタイトル 、余白などの初期化などもある。

おすすめは [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/) を使用することである。
