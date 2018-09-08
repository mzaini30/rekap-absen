// get url parameter

var get_url_parameter = function get_url_parameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

id = get_url_parameter('id')
nama = get_url_parameter('guru')
tanggal = get_url_parameter('tanggal')

// console.log(id)
// console.log(nama)
// console.log(tanggal)

id_pecah = id.split('__')
nama_pecah = nama.split('__')
tanggal_pecah = tanggal.split('__')

// console.log(id_pecah)
// console.log(nama_pecah)
// console.log(tanggal_pecah)

// <tbody class="isi">
//     <tr>
//         <td class="isi-id"></td>
//         <td class="isi-nama"></td>
//         <td class="isi-tanggal"></td>
//     </tr>
// </tbody>

isi = ''
for (n in id_pecah){
    isi += '<tr>\
        <td>' + id_pecah[n] + '</td>\
        <td>' + nama_pecah[n] + '</td>\
        <td>' + tanggal_pecah[n] + '</td>\
    </tr>'
}
$('.isi').html(isi)

// $('.isi-id').html(get_url_parameter('id'))
// $('.isi-nama').html(get_url_parameter('guru'))
// $('.isi-tanggal').html(get_url_parameter('tanggal'))