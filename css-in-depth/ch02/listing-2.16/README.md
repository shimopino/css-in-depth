# Listing-2.16

特定のコンポーネントに対してスケーリングするフォントサイズを設定したい場合には、親要素のフォントサイズを引き継ぐ `em` を使用することがある。

そこで以下のような HTML 要素を用意する。

```html
<div class="panel">
  <h2>Single Origin</h2>
  <!-- ... -->
</div>
```

まずは親要素となる `.panel` クラスに対して基準となるフォントサイズを指定するために、`font-size: 1rem` を追加する。

```css
.panel {
  /* 基準とするために、親要素としてフォントサイズをルート要素に合わせるスタイルに変更する */
  font-size: 1rem;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid #999;
}
```

その後、子要素に対して親要素を基準としたフォントサイズを設定する（`0.8em`）ことで、ブラウザのフォントサイズの変更にも柔軟に対応することが可能となる。

```css
.panel > h2 {
  margin-top: 0;
  /* 見出しのフォントサイズは親要素を基準としたサイズに変更する */
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
}
```
