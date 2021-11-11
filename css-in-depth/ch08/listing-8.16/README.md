# Listing-8.15

画像のレスポンシブ対応には、CSS だけではなく HTML タグでも対応することができる。

以下のように `srcset` 属性を指定すればいい。

```html
<img
  alt="A white coffee mug on a bed of coffee beans"
  src="coffee-beans-small.jpg"
  srcset="
    coffee-beans-small.jpg   560w,
    coffee-beans-medium.jpg  800w,
    coffee-beans.jpg        1280w
  "
/>
```

## 参考資料

- [https://jakearchibald.com/2015/anatomy-of-responsive-images/](https://jakearchibald.com/2015/anatomy-of-responsive-images/)
