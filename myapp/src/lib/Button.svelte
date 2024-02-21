<script>
    
</script>

<button><slot>Fallback</slot></button>

<style lang="scss">
    // @use '../styles/variables.scss'
    button {
        border: none;
        background-color: #ff3e00;
        color: #fff;
        padding: 1.2rem;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: variables.$color;
        }
}
</style>