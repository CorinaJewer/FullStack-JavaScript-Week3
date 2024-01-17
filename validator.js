var validator = require('validator');

console.log(validator.isEmail('foo@bar.com')); //=> true
console.log(validator.isISBN('978-0-596-52068-7')); //=> true
// console.log(validator.isMobilePhone('zh-CN', '18782998776')); //=> true
console.log(validator.isURL('http://www.baidu.com')); //=> true