/**
 * VPC Publishing public-data endpoint.
 * Bind this script to the publisher-maintained Google Sheet and deploy as a Web App.
 * It intentionally exposes only the public tabs used by the storefront.
 */
function doGet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var payload = {
    publisher: readSettings_(ss),
    books: readTable_(ss, 'Books'),
    stores: readTable_(ss, 'Physical Stores'),
    links: readTable_(ss, 'Online Links'),
    articles: readTable_(ss, 'Articles & Write-ups')
  };
  applyLinks_(payload);
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
function readSettings_(ss){
  var sh=ss.getSheetByName('Settings'); if(!sh) return {};
  var v=sh.getDataRange().getDisplayValues(), out={};
  for(var i=1;i<v.length;i++){if(v[i][0]) out[v[i][0]]=v[i][1];}
  return out;
}
function readTable_(ss,name){
  var sh=ss.getSheetByName(name); if(!sh) return [];
  var v=sh.getDataRange().getDisplayValues(); if(v.length<2) return [];
  var h=v[0].map(function(x){return x.trim();});
  return v.slice(1).filter(function(r){return r.some(String);}).map(function(r){var o={};h.forEach(function(k,i){if(k)o[k]=r[i];});return o;});
}
function applyLinks_(p){
  var links=p.links||[];
  (p.books||[]).forEach(function(b){
    var rows=links.filter(function(x){return String(x.bookId||x.Book||'')===String(b.id||b.bookId||'');});
    rows.forEach(function(x){
      var retailer=String(x.retailer||x.Retailer||'').toLowerCase();
      var url=x.url||x.URL||'';
      if(retailer.indexOf('national')>-1) b.nationalBookStoreProduct=url;
      if(retailer.indexOf('lazada')>-1) b.lazadaProduct=url;
      if(retailer.indexOf('shopee')>-1) b.shopeeProduct=url;
    });
  });
}
