<script>
  export let value = null;
  export let onSquareClick = () => {};
</script>

<button class="square" on:click={onSquareClick}>
  {value}
</button>

<style>
  .square {
    width: 100px;
    height: 100px;
    background: #fff;
    border: 1px solid #999;
    padding: 0;
    font-size: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    float: left;
  }

  .square:focus {
    outline: none;
  }
</style>