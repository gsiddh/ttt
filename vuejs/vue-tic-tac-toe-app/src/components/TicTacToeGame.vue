<template>
  <div class="tic-tac-toe">
    <h1>Tic Tac Toe</h1>
    <div class="board">
      <div 
        v-for="(cell, index) in board" 
        :key="index" 
        class="cell" 
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <button v-if="winner || isDraw" @click="resetGame">Restart Game</button>
    <p v-if="winner">{{ winner }} wins!</p>
    <p v-if="isDraw">It's a draw!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    };
  },
  computed: {
    isDraw() {
      return this.board.every(cell => cell) && !this.winner;
    }
  },
  methods: {
    makeMove(index) {
      if (!this.board[index] && !this.winner) {
        this.$set(this.board, index, this.currentPlayer);
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          this.winner = this.board[a];
        }
      }
    },
    resetGame() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.winner = null;
    }
  }
};
</script>

<style scoped>
.tic-tac-toe {
  text-align: center;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  margin: 20px auto;
}
.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 1px solid #000;
  cursor: pointer;
}
.cell:hover {
  background-color: #f0f0f0;
}
</style>