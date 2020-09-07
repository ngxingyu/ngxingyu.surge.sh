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

<h1>Widgets</h1>
<select bind:value={selected} on:change={changeComponent}>
	{#each options as op}
    <option value={op}>{op}</option>
	{/each}
</select>

<div id="widgets">
<slot></slot>
</div>
