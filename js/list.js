document.addEventListener('DOMContentLoaded', function() {
  insert_shops();
  insert_category("record1");
  insert_subcategory("record1");
}, false);

function insert_shops() {
  
  var select_shop = document.getElementById('shop');
  
  if (typeof shops == 'undefined') {
    var option = document.createElement('option');
    option.value = 99;
    option.appendChild(document.createTextNode('データがありません'));
    
    select_shop.appendChild(option);
  } else {
    for (var i = 0, len = shops.length; i < len; i++) {
      var option = document.createElement('option');
      option.value = shops[i][0];
      option.appendChild(document.createTextNode(shops[i][1]));
      
      select_shop.appendChild(option);
    }
  }
}

function insert_category(record_id) {
  
  var tr = document.getElementById(record_id);
  var select_category = tr.getElementsByClassName('category').item(0);
  
  //console.log(select_category);
  
  if (typeof categorys == 'undefined') {
    var option = document.createElement('option');
    option.value = 99;
    option.appendChild(document.createTextNode('データがありません'));
    
    select_category.appendChild(option);
  } else {
    for (var i = 0, len = categorys.length; i < len; i++) {
      var option = document.createElement('option');
      option.value = categorys[i][0];
      option.appendChild(document.createTextNode(categorys[i][1]));
      
      select_category.appendChild(option);
    }
  }
}

function insert_subcategory(record_id) {
  
  var tr = document.getElementById(record_id);
  var select_category = tr.getElementsByClassName('category').item(0);
  var select_subcategory = tr.getElementsByClassName('subcategory').item(0);
  
  while(select_subcategory.firstChild){
    select_subcategory.removeChild(select_subcategory.firstChild);
  }
    // https://freefielder.jp/blog/2015/09/javascript-remove-childnodes.html
  
  //console.log(select_subcategory);
  
  if (typeof subcategorys == 'undefined') {
    var option = document.createElement('option');
    option.value = 99;
    option.appendChild(document.createTextNode('データがありません'));
    
    select_subcategory.appendChild(option);
  } else {
    for (var i = 0, len = subcategorys.length; i < len; i++) {
      if (subcategorys[i][1] == select_category.value) {
        var option = document.createElement('option');
        option.value = subcategorys[i][0];
        option.appendChild(document.createTextNode(subcategorys[i][2]));
        
        select_subcategory.appendChild(option);
      }
    }
  }
}

