const mergeSort = (arr, comparator) => {
    const aux = (start, end) => {
        if (start >= end) return [arr[start]];

        const mid = Math.floor((start + end) / 2);
        const left = aux(start, mid);
        const right = aux(mid + 1, end);

        return mergeSort(left, right, comparator);
    }
    return aux(0, arr.length - 1);
}