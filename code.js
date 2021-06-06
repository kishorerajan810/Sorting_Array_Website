var numbers = new Array();

for (var i = 0; i < 10; i++) {
    numbers[i] = Math.random(0, 1) * 13;
}
console.log(numbers);

function Sort(arr, i) {
    var len = arr.length;

    var min = i;
    for (var j = i; j < len; j++) {
        if (arr[j] <= arr[min]) {
            min = j;
        }
    }
    console.log(arr);
    var smallestNumber = arr[min];
    arr[min] = arr[i];
    arr[i] = smallestNumber;

    if (i < len) {
        i++;
        Sort(arr, i);
    } else {
        console.log(`Sorted!`);
    }
}

selectionSort(numbers, 0);