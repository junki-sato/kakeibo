<?php
require_once 'kakeibo_config.php';
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>家計簿</title>
<script src="js/list.js"></script>
<script src="js/record.js"></script>
</head>
<body>
<input type="hidden" id="counter" value="1">
<h2>家計簿のページ</h2>

<table border="1">
  <thead>
    <tr>
      <th>日付</th>
      <th>店</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="date"></td>
      <td><select id="shop"></select></td>
    </tr>
  </tbody>
</table>

<table border="1">
  <thead>
    <tr>
      <th>カテゴリ</th>
      <th>サブカテゴリ</th>
      <th>金額</th>
      <th></th>
    </tr>
  </thead>
  <tbody id="tbody">
    <tr id="record1">
      <td><select class="category" onchange="insert_subcategory('record1')"></select></td>
      <td><select class="subcategory"></select></td>
      <td><input type="text" class="amount"></td>
      <td>
        <input type="button" class="plus" value="＋" onclick="add_record('record1')">
        <input type="button" class="minus" value="－" onclick="delete_record('record1')">
      </td>
    </tr>
  </tbody>
</table>
</body>
</html>

<script>
var shops = [
  [99, ''],
  [0, 'マック'],
  [1, '吉野家'],
  [2, 'ローソン'],
  [3, 'マツキヨ'],
];

var categorys = [
  [99, ''],
  [0, '食費'],
  [1, '雑貨'],
  [2, 'エンタメ'],
  [3, 'その他'],
];

var subcategorys = [
  [99, 99, ''],
  [0, 0, '食料'],
  [1, 0, '昼食'],
  [2, 1, '消耗品'],
  [3, 1, 'たばこ'],
  [4, 2, '本'],
  [5, 2, 'ゲーム'],
  [6, 3, 'その他'],
];
</script>
