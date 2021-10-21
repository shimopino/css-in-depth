# Listing-1.10

もしも詳細度が同じレベルの場合には、ソースコード上で後から宣言されたルールが優先される。

```css
/* (0, 1, 1) */
.nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

/* (0, 1, 1) */
a.featured {
  background-color: orange;
}
```
