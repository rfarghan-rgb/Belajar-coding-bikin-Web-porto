const nama = "mas fuad";
let usia= 100;
//console.log('nama gueh', nama, 'umur gueh', usia, 'gueh gay')

console.log(nama)
console.log(usia)
generatebiodata()

function generatebiodata(){
  if (usia > 90) {
    console.log('mati ini mah')
  }else if (usia > 40) {
    console.log('tua bangka')
  } else if (usia > 17) {
    console.log('jomok')
  }else if ( usia < 17) {
    console.log('FBI OPENUP')
  }
  //console.log(`nama gueh ${nama} umur gueh ${usia}`)
}