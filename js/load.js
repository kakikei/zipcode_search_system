// function setState(){
//   var zipcode = $('#zipcode').val();
//   $.ajax({
//     timeout  : 10000,
//     url      : 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=',
//     datetype : 'json',
//     type     : 'GET',
//     date     : {
//       address  : zipcode,
//       language : 'ja'
//     }
//   })
//   .then(function(res){//データ取得
//     console.log(zipcode);
//     $('#state')  .val(res.results[0]['address1']); //都道府県
//     $('#city')   .val(res.results[0]['address2']); //市区町村
//     $('#address').val(res.results[0]['address3']); //番地
//     return false;
//   },//データ不取得
// )};
