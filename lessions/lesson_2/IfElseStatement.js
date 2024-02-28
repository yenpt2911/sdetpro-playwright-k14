const EXPECTED_TIME = 7;
let arrivalTime = 7;

// if(value) {}
// ==,  ===, !=, !==, >,<, >=, <=
let isHeOnTime = arrivalTime === EXPECTED_TIME; // === so sánh giá trị và kiểu dữ liệu
                                                // == Chỉ so sánh giá trị


if(isHeOnTime) {
    console.log("Let's talk!");
} else {
    console.log("Write letter!");
}
console.log("End program!");