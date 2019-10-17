function add_record(record_id) {
  
  var counter = document.getElementById('counter');
  counter.value++;
  var new_record_id = 'record' + counter.value;
  
  var tbody = document.getElementById('tbody');
  var tr = document.getElementById(record_id);
  
  var new_tr = tr.cloneNode(true);
    // http://shain.blog.conextivo.com/2007/05/javascript_dom_clonenode.html
  new_tr.id = new_record_id;

  //console.log("new_tr : ");console.log(new_tr);
  
  new_tr.getElementsByClassName('category').item(0).onchange = function() { insert_subcategory(new_record_id) };  
  new_tr.getElementsByClassName('amount').item(0).value = null;  
  new_tr.getElementsByClassName('plus').item(0).onclick = function() { add_record(new_record_id) };
  new_tr.getElementsByClassName('minus').item(0).onclick = function() { delete_record(new_record_id) };
    // https://ja.javascript.info/searching-elements-dom

  //console.log("new_tr : ");console.log(new_tr);
  
  tbody.appendChild(new_tr);
  if (tr.nextSibling) {
    tbody.insertBefore(new_tr, tr.nextSibling);
  }
  insert_subcategory(new_record_id);
}

function delete_record(record_id) {
  
  var tbody = document.getElementById("tbody");
  var terget = document.getElementById(record_id);
  
  if (tbody.getElementsByTagName('tr').length == 1){
    add_record(record_id);
  }
  
  tbody.removeChild(terget);
}
