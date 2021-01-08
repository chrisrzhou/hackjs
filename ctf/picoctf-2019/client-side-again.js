var vars = [
  "29871}",
  "_again_d",
  "this",
  "Password\u0020Verified",
  "Incorrect\u0020password",
  "getElementById",
  "value",
  "substring",
  "picoCTF{",
  "not_this",
];

(function (arr, i) {
  function shift(j) {
    while (--j) {
      arr.push(arr.shift());
    }
  };
  shift(++i);
})(vars, 435);

// vars = [
//   "getElementById",
//   "value",
//   "substring",
//   "picoCTF{",
//   "not_this",
//   "29871}",
//   "_again_d",
//   "this",
//   "Password Verified",
//   "Incorrect password",
// ];

function get(i) {
  return vars[i];
};

function verify() {
  checkpass = document.getElementById("pass")[get(1)];
  if (checkpass.substring(0, 8) == 'picoCTF{') {
    if (
      checkpass.substring(8, 16) == 'not_this' &&
      checkpass.substring(16, 24) == '_again_d' &&
      checkpass.substring(24, 32) == '29871}'
    ) {
      alert(get(8));
    }
  } else {
    alert(get(9));
  }
}
