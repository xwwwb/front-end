import _ from 'lodash';

function main() {
  chunk();
  compact();
  concat();
  difference();
  differenceBy();
  differenceWith();
  drop();
  dropRight();
}
function chunk() {
  console.log("chunk将数组(array)拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。")
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
  console.log(_.chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3));
  console.log("\n");
}
function compact() {
  console.log("compact创建新数组，返回原数组中所有非假值元素");
  console.log(_.compact([0, 1, false, 2, '', 3, undefined, NaN, null]));
  console.log("\n");
}
function concat() {
  console.log("concat将array与任何数组或值连在一起");
  var array = [1];
  var other = _.concat(array, 2, [3], [[4]]);
  console.log(other);
  console.log("\n");
}
function difference() {
  console.log("difference创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中");
  console.log(_.difference([2, 3, 4, 5, 6, 7, 8], [3, 4, 6]));
  console.log("\n");
}
function differenceBy() {
  console.log("differenceBy第三个参数传入一个迭代器，会先使用迭代器分别迭代array和value的每个元素，返回的值再做difference比较");
  console.log(_.differenceBy([1.2, 3.2, 5.6, 7.8], [2.3, 4.1, 5.2], Math.floor));
  console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))
  console.log("\n");
}
function differenceWith() {
  console.log("differenceWith接受一个比较器");
  var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
  console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));
  console.log("探查比较器函数的作用：依次打印arrVal和othVal")
  _.differenceWith([1, 2, 3], [3, 4, 5], (arrVal, othVal) => {
    console.log(arrVal, othVal)
  })
  console.log("写一个正常的比较器");
  console.log(_.differenceWith([1, 2, 3], [2, 3, 4], (arrVal, othVal) => {
    if (arrVal === othVal) {
      return true;
    } else {
      return false;
    }
  }))
  console.log("写一个错误的比较器")
  console.log(_.differenceWith([1, 2, 3], [-2, -3, -4], () => {
    return false;
  }));
  console.log("关于这三个函数的区别：https://blog.csdn.net/fly_home_ysc/article/details/99072386");
  console.log("\n");
}
function drop() {
  console.log("drop创建一个切片数组，去除array前面的n个元素");
  console.log(_.drop([1, 2, 3, 4, 5, 6, 7, 8], 3));
  console.log("\n");
}
function dropRight() {
  console.log("dropRight创建一个切片数组，去除array尾部的n个元素");
  console.log(_.dropRight([1, 2, 3, 4, 5, 6, 7, 8], 3));
  console.log("\n");
}

export default main;