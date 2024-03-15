function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// 数组模拟堆 index为当前元素的索引 size：0-size为堆化的区域
function heapify(arr, index, size) {
  let left = index * 2 + 1;
  while (left <= size) {
    const maxIndex = left + 1 <= size && arr[left + 1] > arr[left] ? left + 1 : left;

    if (arr[index] >= arr[maxIndex]) return;
    swap(arr, index, maxIndex);
    index = maxIndex;
    left = 2 * index + 1;
  }
}

function heapInsert(arr, index) {
  let fIndex = Math.floor((index - 1) >> 1);
  while (fIndex >= 0 && arr[fIndex] < arr[index]) {
    swap(arr, fIndex, index);
    index = fIndex;
    fIndex = Math.floor((index - 1) >> 1);
  }
}


function heapSort(arr, left, right) {
  if (!Array.isArray(arr))
    throw 'Error in funtion bubbleSort: arguments[0] is not a array.';
  left = left ?? 0;
  right = right ?? arr.length - 1;

  // 堆化数组(只需要保证叶子节点全部堆化即可)
  for (let i = Math.floor((right - left) / 2); i >= left; i--) {
    heapify(arr, i, right);
  }

  let size = right;
  while (size >= left) {
    swap(arr, size, 0);
    heapify(arr, 0, --size);
  }
}


// 测试的方法
function testMethod(arr) {
  heapSort(arr);
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
