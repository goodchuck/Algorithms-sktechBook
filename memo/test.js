function solution(progresses, speeds) {
    var answer = [];
    let day = 0;
    let index = 0;
    let returns = [];
    while (index < progresses.length) {
        prevDay = day;
        // console.log({ index })
        progresses = progresses.map((p, i) => p + speeds[i]);
        let count = 0;
        progresses.forEach((p, i) => {
            // console.log({ p, i })
            if (i === index && p >= 100) {
                if (returns.length === 0) {
                    returns.push({ day: day, count: 1 })
                }
                else if (returns[returns.length - 1].day !== day) {
                    returns.push({ day: day, count: 1 })
                }
                else if (returns[returns.length - 1].day === day) {
                    returns[returns.length - 1].count += 1;
                }
                index++;
            }
        })
        day++;
    }
    for (let row of returns) {
        answer.push(row.count);
    }
    console.log(answer)
}
solution([93, 30, 55], [1, 30, 5]);