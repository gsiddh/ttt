<script>
  import Board from './Board.svelte';
</script>

<main>
  <h1>Tic-Tac-Toe</h1>
  <Board />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>