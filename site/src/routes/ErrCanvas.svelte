<script>
  import Clock from '../components/widgets/clock.svelte';
  export let position;
</script>

<div class="text-center"> 
  <Clock />
  <slot></slot>
  <p>{position.x}</p>
</div>
