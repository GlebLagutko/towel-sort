// You should implement your task here.

module.exports = function towelSort(matrix) {
    let answer = []
    if (matrix === undefined) {
        return answer;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            let arr = matrix[i];
            answer = [...answer, ...matrix[i]];
        } else {
            answer = [...answer, ...matrix[i].reverse()];
        }
    }
    return answer;
}

