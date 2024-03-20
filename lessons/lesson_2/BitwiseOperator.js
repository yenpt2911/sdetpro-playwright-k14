// Nếu dùng & : EVALUATE điều kiện, bất chấp biểu thức trái sai-> vẫn thực hiện biểu thức 2
// && tuyệt đối

if(getFirstNum() !== 0 & getSecondNum() !== 0){
      console.log('The evaluation was true....');
}

function getFirstNum() {
    console.log('Calling method 1...');
    return 1;
}

function getSecondNum(){
    console.log('Calling method 2...');
    return 2;
}