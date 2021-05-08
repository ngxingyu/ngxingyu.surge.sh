<script>
  import {goto} from '@sapper/app';

  const options=[
    '',
    'clock',
    'TicTacToe'
  ];

  function changeComponent(){
    goto(`/widgets/${selected}`);
  }
  export let segment;
  let selected=segment;
</script>

<style>
  #widgets{
    padding:12px;
    margin:8px;
    border-radius:8px;
    background: #f4fbff;
    text-align:center;
  }
</style>
<div class='container mx-auto w-full px-4 md:px-8'>
  <h1>Widgets</h1>
  <div class="inline-block relative w-64">
    <select class='block appearance-none w-full bg-gray-150 border border-gray-400 hover:border-gray-500 hover:bg-white px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' bind:value={selected} on:change={changeComponent}>
      {#each options as op}
        <option value={op}>{op}</option>
      {/each}
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
  <div id="widgets">
    <slot></slot>
  </div>
</div>
