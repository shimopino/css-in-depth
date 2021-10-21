# Listing-1.9

ID を利用することもできるが、ID は 1 ページで一意である必要があるため、被っていないか意識する必要が出てくる。

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

こうした場合には、詳細度をクラスレベルに合わせて、適用している数によって優先順位を決定すると後からも利用しやすい形式にできる。

```css
/* (0, 0, 1) */
h1 {
  color: #2f4f4f;
  margin-bottom: 10px;
}

/* (0, 1, 0) */
.nav {
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
}

/* (0, 1, 1) */
.nav li {
  display: inline-block;
}

/* (0, 1, 1) */
.nav a {
  color: white;
  background-color: #13a4a4;
  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
}

/* (0, 2, 0) */
.nav .featured {
  background-color: orange;
}
```
