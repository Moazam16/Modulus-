// // var e = prompt("enter pkr")
// // var hund = e / 100 ; //get hundred
// // var remain = e % 1000
// // console.log(hund)
// // console.log(remain)
// // var hundred = remain%100
// // console.log(hundred)
// // var fifty = hundred%50
// // console.log(fifty)


// var p  = prompt("enter pkr")
// var hund = p/100
// console.log  (Math.floor(hund))

// var lefth = p%100
// console.log(lefth)

// var fifty = lefth/50 
// console.log(Math.floor(fifty))

// var ten =fifty/10
// console.log(Math.floor(ten))

// var fifty= fifty%10
// console.log(fifty)


var p = prompt("Enter PKR")
var thou = p / 1000
var lefth = p%1000
console.log(Math.floor(thou))

var five = lefth/500
var lefth1 = lefth%500
console.log(Math.floor(five))

var hund = lefth1 / 100
var lefth2 = lefth1%100
console.log(Math.floor(hund))

var fifty = lefth2/50
var lefth3 = lefth2%50
console.log(Math.floor(fifty))

var ten = lefth3/10
console.log(Math.floor(ten))