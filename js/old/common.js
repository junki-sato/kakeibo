document.addEventListener('DOMContentLoaded', function() {
  insert_shops(),
  insert_category(),
  insert_subcategory()
}, false);

function insert_shops() {
  
  var shops = [
    'マック',
    '吉野家',
    'ローソン',
    'マツキヨ',
  ];
  
  var select_shop = document.getElementById('shop');
  
  for (var i = 0, len = shops.length; i < len; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.appendChild(document.createTextNode(shops[i]));
    
    select_shop.appendChild(option);
  }
}

function insert_category() {
  
  var categorys = [
    '食費',
    '雑貨',
    'エンタメ',
    'その他',
  ];
  
  var select_category = document.getElementById('category');
  
  for (var i = 0, len = categorys.length; i < len; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.appendChild(document.createTextNode(categorys[i]));
    
    select_category.appendChild(option);
  }
}

function insert_subcategory() {
  
  var subcategorys = [
    '食料',
    '昼食',
    '消耗品',
    'たばこ',
    '本',
    'ゲーム',
    'その他',
  ];
  
  var select_subcategory = document.getElementById('subcategory');
  
  for (var i = 0, len = subcategorys.length; i < len; i++) {
    var option = document.createElement('option');
    option.value = i;
    option.appendChild(document.createTextNode(subcategorys[i]));
    
    select_subcategory.appendChild(option);
  }
}

function add_record(record_id) {
  
  var counter = document.getElementById('counter');
  counter.value++;
  var new_record_id = 'record' + counter.value;
  
  
  var tr = document.getElementById(record_id);
  
  var new_tr = tr.cloneNode(true); // http://shain.blog.conextivo.com/2007/05/javascript_dom_clonenode.html
  new_tr.id = new_record_id;
  //console.log("new_tr : ");
  //console.log(new_tr);
  
  var new_tds = new_tr.childNodes;
  console.log("new_tds : ");
  console.log(new_tds);
  
  new_tds.item(1).childNodes.item(0).value = null;
  new_tds.item(3).childNodes.item(0).value = null;
  
  var new_buttons = new_tds.item(7).childNodes;
  new_buttons.item(1).onclick = function() { add_record(new_record_id) };
  new_buttons.item(2).onclick = function() { delete_record(new_record_id) };
  //console.log("new_buttons : ");
  //console.log(new_buttons);
  
  var tbody = document.getElementById('tbody');
  
  tbody.appendChild(new_tr);
  if (tr.nextSibling) {
    tbody.insertBefore(new_tr, tr.nextSibling);
  }
  
}

function delete_record(record_id) {
  
  var tbody = document.getElementById("tbody");
  var terget = document.getElementById(record_id);
  
  tbody.removeChild(terget);
}
