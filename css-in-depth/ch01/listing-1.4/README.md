# Listing-1.4

同じ CSS ファイルであっても、どのスタイルが適用されるのかは詳細度に依存している。

最も詳細なものはインラインスタイルであり、以下のように定義した場合である。

```html
<li>
  <!-- style属性で直接指定する -->
  <a href="/specials" class="featured" style="background-color: orange"
    >Specials</a
  >
</li>
```

もしもインラインスタイルを上書きしたい場合は、`!important` を使用する。
