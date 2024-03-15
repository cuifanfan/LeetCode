function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 合并两个有序数组
function merge(arr, left, middle, right) {
  // left-middle有序， middle+1-right有序
  const temp = [];
  let i = left;
  let j = middle + 1;
  while (true) {
    if (i > middle) {
      while (j <= right) temp.push(arr[j++]);
      break;
    }
    if (j > right) {
      while (i <= middle) temp.push(arr[i++]);
      break;
    }

    if (arr[j] < arr[i]) temp.push(arr[j++]);
    else temp.push(arr[i++]);
  }

  for (let i = left; i <= right; i++) {
    arr[i] = temp[i - left];
  }
}

function mergeSort(arr, left, right) {
  if (!Array.isArray(arr))
    throw 'Error in funtion bubbleSort: arguments[0] is not a array.';
  left = left ?? 0;
  right = right ?? arr.length - 1;

  // 递归只剩下一个数认为有序
  if (left >= right) return;

  // 取中位数，怕越界
  const middle = Math.floor(left + ((right - left) >> 1));
  // 排序左右两边
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  // 合并左右两边
  merge(arr, left, middle, right);
}

// 测试的方法
function testMethod(arr) {
  mergeSort(arr);
}

//正确的方法
function rightMethod(arr) {
  arr.sort((a, b) => a - b);
}

//随机数组生成器，size为最大长度，value为最大值
function generateRandomArray(size, value) {
  //生成长度随机的数组
  let arr = new Array(Math.floor((size + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((value + 1) * ((Math.random() - 0.5) * 2));
  }
  return arr;
}

//拷贝数组方法
function copyArray(arr) {
  if (arr == null) {
    return null;
  }
  return [].concat(arr);
}

//比对方法
function isEqual(arr1, arr2) {
  if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
    return false;
  }
  if (arr1 == null && arr2 == null) {
    return true;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

//测试
function Test() {
  let testTimes = 5000;
  let size = 10;
  let value = 100;
  let succeed = true;
  for (let i = 0; i < testTimes; i++) {
    let arr1 = generateRandomArray(size, value);
    let arr2 = copyArray(arr1);
    let arr3 = copyArray(arr1);
    testMethod(arr1);
    rightMethod(arr2);
    if (!isEqual(arr1, arr2)) {
      succeed = false;
      console.log(arr3);
      break;
    }
  }
  console.log(succeed ? 'nice' : 'Fucking fucked');
}

Test();
