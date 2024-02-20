<script>
  let name = 'Hello Svelte'
  let src = 'http://picsum.com/200/200'
  let string = 'Some <strong>string</strong> with html'
</script>


<img {src} alt="test {name}"/>
<h1>{name.toLowerCase()}!</h1>
<p>{@html string}</p>
<style>
  h1 {
    color: red;
  }
</style>