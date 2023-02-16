const cells = document.querySelectorAll('.user_check_inp');
let team = 'O';
let moves = 0;
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML === '') {
            cell.innerHTML = team;
            moves++;
            if (checker(cells, team)) {
                alert(`${team} just won the game!`);
            } else if (moves === 9) {
                alert('Draw!');
            } else {
                team = team === 'O' ? 'X' : 'O';
            }
        }
    });
});