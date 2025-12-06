// high order function
function add(a,b,cb) {
  const result=a+b

  cb(result)
}

add(2,3,function cb(value) {
    console.log(value);
})