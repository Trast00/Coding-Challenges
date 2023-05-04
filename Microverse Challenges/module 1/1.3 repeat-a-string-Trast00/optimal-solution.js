/* Use stringbuilder as concate create a new string which increase the space
stringbuilder are alos better for larger value of num  */
function repeatStringNumTimes(str, num) {
  // write your code here
  if (num <= 0) {
    return "";
  }
  let sb = [];
  for (let i = 0; i < num; i++) {
    sb.push(str);
  }
  return sb.join("");
}

module.exports = repeatStringNumTimes;
