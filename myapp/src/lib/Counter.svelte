<script>
  export let initialCount;
  export let maxCount = 10;

console.log($$props, $$restProps)

  let count = initialCount;
  

  $: string =`You have clicked ${count} times.`
  


  $: if (count >5){
    console.log(`The count is ${count}`)
  }

  function increment(){
    if(count === maxCount)return;
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicks {count}
</button>
<h3>{string}</h3>

<style>
  button {
    padding: 1rem;
  }
</style>