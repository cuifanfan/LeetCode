function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left, right) {
  if (!Array.isArray(arr))
    throw 'Error in function bubbleSort: arguments[0] is not a array.';
  left = left ?? 0;
  right = right ?? arr.length - 1;

  if (left >= right) return;
  // 枢纽 交换到最后
  swap(arr, right, left + Math.floor((right - left + 1) * Math.random()));
  const section = partation(arr, left, right);
  quickSort(arr, left, section[0] - 1);
  quickSort(arr, section[1] + 1, right);
}

function partation(arr, left, right) {
  // 荷兰国旗问题
  let i = left - 1; // [0, i] 区间为小于privot
  let j = right; // [j, right] 区间为大于privot
  let k = left; // [i + 1, j - 1] 区间为等于privot
  while (k < j) {
    if (arr[k] > arr[right]) {
      swap(arr, k, --j);
    } else if (arr[k] < arr[right]) {
      swap(arr, k++, ++i);
    } else {
      k++;
    }
  }
  swap(arr, right, j++);
  return [i + 1, j - 1];
}

function getPrivot(arr, left, right) {
  // 只有一个元素的时候
  if (left >= right) return arr[left]

  let middle = Math.floor(left + ((right - left) >> 1))

  // 给left, middle, right排序
  if (arr[left] > arr[middle]) swap(arr, left, middle)
  if (arr[middle] > arr[right]) swap(arr, middle, right)
  if (arr[left] > arr[middle]) swap(arr, left, middle)

  // 把中位数middle放到right-1位置
  swap(arr, middle, right - 1)
  return arr[right - 1]
}

function oneQuickSort(arr, left, right) {
  if (!Array.isArray(arr))
    throw 'Error in function bubbleSort: arguments[0] is not a array.';
  left = left ?? 0;
  right = right ?? arr.length - 1;

  if (left >= right) return;

  const privot = getPrivot(arr, left, right);
  let i = left;
  let j = right - 1;
  while (i < j) {
    while (arr[++i] < privot) {}
    while (arr[--j] > privot) {}
    if (i < j) swap(arr, i, j);
    else break;
  }

  swap(arr, right - 1, i);
  while (arr[j] === privot) j--;
  while (arr[i] === privot) i++;
  oneQuickSort(arr, left, j);
  oneQuickSort(arr, i, right);
}

// 测试的方法
function testMethod(arr) {
  oneQuickSort(arr);
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
