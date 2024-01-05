const binarySearch = async (list, target, left, right) => {
    let mid = 0;

    while (left <= right) {
        // 가운데 인덱스
        mid = Math.floor((left + right) / 2);

        if (list[mid] === target) {
            return mid;
        }

        // 대소 비교로 범위 지정
        if (list[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}