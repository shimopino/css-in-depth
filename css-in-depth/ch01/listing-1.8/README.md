# Listing-1.8

`!important` を使用することで強制的に宣言を上書きすることができる。

```css
#main-nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

.featured {
  background-color: orange;
}
```

しかし、複数箇所で宣言してしまっている場合は、どのスタイルが適用されるのか直感的にわからなくなってしまう。

そこで詳細度を利用して、以下のように 2 つ目のスタイルにも ID を指定すればいい。

```css
/* (1, 0, 1) */
#main-nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

/* 追加で ID を指定する */
/* (1, 1, 0) */
#main-nav .featured {
  background-color: orange;
}
```
