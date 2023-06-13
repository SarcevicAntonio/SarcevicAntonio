<script>
  export let count = 0
  function inc() {
    count++
  }
</script>
<button on:click="{inc}">Clicked {count} times</button>
<style>
  button {
    display: inline-block;
    color: #5c8012;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Futura';
    background-color: white;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 8px;
    margin: 8px;
    transition: box-shadow 0.4s ease;
    user-select: none;
  }
  button:hover {
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.161);
  }
  button:active {
    background-color: grey;
	 color: #9ed137;
  }
</style>