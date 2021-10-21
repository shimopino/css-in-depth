# Listing-1.15

CSS で継承をする場合には、特に全体でルールが一律に適用されている中で、特定のルールは親要素に依存するようにしたい場合に使用する。

例えば、以下の中でリンクで使用するテキストは灰色に統一したい場合が存在する。

```html
<footer class="footer">
  &copy; 2016 Wombat Coffee Roasters &mdash;
  <a href="/terms-of-use">Terms of use</a>
</footer>
```

しかし、以下のようなスタイルが適用されている場合には、要素に直接指定されているテキストカラーが優先的に適用される。

```css
a:link {
  color: blue;
  text-decoration: none;
}

/* .footer クラスのカラーは灰色で指定されている */
/* しかし aタグ の指定はないので、上記のルールが継承されてしまい、青色となる */
.footer {
  color: #666;
  background-color: #ccc;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
}
```

この場合は、`.footer` クラスに適用されているテキストカラーを継承させたい。

その場合には以下のように `inherit` を使用する。

```css
a:link {
  color: blue;
  text-decoration: none;
}

.footer {
  color: #666;
  background-color: #ccc;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
}

.footer a {
  /* カラーは親要素から継承する */
  color: inherit;
  /* リンクに下線を引いておく */
  text-decoration: underline;
}
```
