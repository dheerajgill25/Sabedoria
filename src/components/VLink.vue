<template>

</template>

<script>

  export default {
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive () {
        return this.href === window.location.pathname
      }
    }
  }
</script>
