/* time: O(2^n) Space: O(n) */
function hanoi_steps(numberOfDiscs, start=1, used=2, goal=3) {
    let result = '';
    if (numberOfDiscs === 1) {
        result += `${start}->${goal}\n`;
    } else {
        result += hanoi_steps(numberOfDiscs - 1, start, goal, used);
        result += `${start}->${goal}\n`;
        result += hanoi_steps(numberOfDiscs - 1, used, start, goal);
    }
    return result;
}
