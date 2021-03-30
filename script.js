const input = document.querySelector('input[type="text"]');
const button = document.querySelectorAll('button[type="button"]')

console.log(button);

const satu = button[12];
const dua = button[13];
const tiga = button[14];
const empat = button[8];
const lima = button[9];
const enam = button[10];
const tujuh = button[4];
const delapan = button[5];
const sembilan = button[6];
const nol = button[17];

const kali = button[11];
const bagi = button[7];
const tambah = button[19];
const kurang = button[15];

const clear = button[0];
const del = button[3];
const samaDengan = button[18];
const floating = button[16];
const kurungBuka = button[1];
const kurungTutup = button[2];


satu.addEventListener('click', function () {
  input.value = input.value + '1';
});

dua.addEventListener('click', function () {
  input.value = input.value + '2';
});

tiga.addEventListener('click', function () {
  input.value = input.value + '3';
});

empat.addEventListener('click', function () {
  input.value = input.value + '4';
});

lima.addEventListener('click', function () {
  input.value = input.value + '5';
});

enam.addEventListener('click', function () {
  input.value = input.value + '6';
});

tujuh.addEventListener('click', function () {
  input.value = input.value + '7';
});

delapan.addEventListener('click', function () {
  input.value = input.value + '8';
});

sembilan.addEventListener('click', function () {
  input.value = input.value + '9';
});

nol.addEventListener('click', function () {
  input.value = input.value + '0';
});


kali.addEventListener('click', function () {
  input.value = input.value + '×';
});

bagi.addEventListener('click', function () {
  input.value = input.value + '÷';
});

tambah.addEventListener('click', function () {
  input.value = input.value + '+';
});

kurang.addEventListener('click', function () {
  input.value = input.value + '-';
});


clear.addEventListener('click', function () {
  input.value = '';
});

//belum selesai
del.addEventListener('click', function () {
  input.value = input.value.substring(0, input.value.length - 1);
});

// belum selesai
samaDengan.addEventListener('click', function () {
  let hasilReplace;
  if (input.value.includes('×') && input.value.includes('÷')) {
    hasilReplace = input.value.replace(/×/gi, "*");
    let hasil = hasilReplace.replace(/÷/gi, "/");
    input.value = eval(hasil);

  } else if (input.value.includes('÷')) {
    hasilReplace = input.value.replace(/÷/gi, "/");
    input.value = eval(hasilReplace);

  } else if (input.value.includes('×')) {
    hasilReplace = input.value.replace(/×/gi, "*");
    input.value = eval(hasilReplace);

  } else {
    input.value = eval(input.value);
  }

});

floating.addEventListener('click', function () {
  input.value = input.value + '.';
});

kurungBuka.addEventListener('click', function () {
  input.value = input.value + '(';
});

kurungTutup.addEventListener('click', function () {
  input.value = input.value + ')';
});



