function setState(){
  var zipcode = $('#zipcode').val();
  $.ajax({
    timeout  : 1000,
    url      : 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=',
    datetype : 'json',
    type     : 'get'
    date     : {
      address   : zipcode,
      language : 'ja',
    },
    then.()
  })
}
var url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + user_postadresss;//リクエストURL
console.log(url);
