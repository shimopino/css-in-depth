# Listing-8.6

これでモバイル版のデザインを作成することができたが、今の設定ではモバイルブラウザはページがレスポンシブではないと判断し、デスクトップブラウザをエミュレートしようとする。

そこで以下の `viewport meta` タグを追加する。

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" 1 content="width=device-width, initial-scale=1.0" />
  <title>Wombat Coffee Roasters</title>
  <link href="styles.css" />
</head>
```

`initial-scale=1.0` を指定することで、ページの読み込み時のズームレベルを `100%` に設定している。

また `content=device-width` を指定することで、CSS を解釈する際にはフルサイズのデスクトップブラウアをエミュレートするのではなく、デバイスの幅を想定した幅として使用することを指示している。
