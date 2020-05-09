function merge(letf: number[], right: number[]) {
  let result: number[] = [];

  while (letf.length && right.length) {
    if (letf[0] < right[0]) {
      result.push(<any>letf.shift());
    } else {
      result.push(<any>right.shift());
    }
  }

  result.push(...(letf.length ? letf : right));

  return result;
}
export function mergeSort(list: number[]): number[] {
  if (list.length < 2) return list;

  let middelIndex = Math.floor(list.length / 2);
  const left = list.slice(0, middelIndex),
    right = list.slice(middelIndex);

  return merge(mergeSort(left), mergeSort(right));
}

/*
 *
 * 非递归版归并排序，思路如下：
 * 至底而上的思路，二和一，四和一，最后是一半一半和整。
 * 循环从左到右依次执行，为了节省空间，我节省了右序列，将原数列的一部分作为右小序列，这一部分不会被覆盖。
 * 作者：吴伟欣
 * */
function mergeSearch(arr: number[]) {
  var len = arr.length;
  var left_s, left_e, right_s, right_e;
  var left_list = null; //只需要一半即可，节省空间，因为原数组后半段是不可能被覆盖的。
  for (var i = 1; i < len; i *= 2) {
    var next = 0; //每一次合并以后初始化next
    for (left_s = 0; left_s < len; left_s = right_e) {
      next = left_s;
      left_e = right_s = left_s + i;
      right_e = right_s + i;
      if (right_e > len) {
        right_e = len;
      }
      //复制左边的数组
      left_list = arr.slice(left_s, left_e);
      var left_index = 0;
      var left_len = left_list.length; //空间换取时间
      while (left_index < left_len) {
        //归并代码
        if (right_s >= right_e || left_list[left_index] <= arr[right_s]) {
          //短路逻辑，优化性能
          arr[next++] = left_list[left_index++];
        } else {
          arr[next++] = arr[right_s++];
        }
      }
    }
  }
  console.timeEnd("耗时");
}
//测试代码
var a = [];
/* for (let i = 0; i < 10000000; i++) {
  a.push(Math.random());
} */
console.log(`开始·~`);
console.time(`耗时`);
// mergeSearch(a);
// mergeSort(a);