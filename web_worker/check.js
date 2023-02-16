function checker(cells, team) {
    return [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]].some(combo => {
        return combo.every(index => cells[index].innerHTML === team);
    });
}