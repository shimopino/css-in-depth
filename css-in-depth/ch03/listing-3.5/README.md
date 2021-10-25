# Listing-3.5

コンテナのスタイル 1 つ 1 つに `border-box` を指定すると、大量に重複が発生してしまう。

そのため全ての要素に対して統一的に設定するには、下記のように **Universal Selector** を設定すればいい。

```css
*,
::before,
::after {
  box-sizing: border-box;
}
```
