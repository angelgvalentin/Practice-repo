let arr = [2, 4, 1, 6, 5, 8, 9, 3, 7];

const sortAscending = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; i > j; j++) {
            if (arr[i] < arr[j]) {
                let x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        }
    }

    console.log("ascending array - " + arr);
};

const sortDescending = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; i > j; j++) {
            if (arr[i] > arr[j]) {
                let x = arr[j];
                arr[j] = arr[i];
                arr[i] = x;
            }
        }
    }

    console.log("descending array - " + arr);
};

sortAscending(arr);
sortDescending(arr);

//done
