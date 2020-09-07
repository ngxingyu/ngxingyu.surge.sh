<script>
	import Board from './Board.svelte';
  import { history, status } from './stores.js';
  import { width, height } from './helpers.js';
  $:current=$history.current;
</script>

<input type=number bind:value={$width} min=3 max=5 on:change={()=>$width=Math.max(3,Math.min(5,$width))}> x 
<input type=number bind:value={$height} min=3 max=5 on:change={()=>$height=Math.max(3,Math.min(5,$height))}>

<div class="game">
    
  <div class="board {$status>0?'':($history.currentState().xIsNext?'cursorX':'cursorO')}">
    <Board width={$width} height={$height}/>
  </div>
	<div class="game-info">
		<div class="status">
			{#if $status === 1}
			 	<b>Winner: {!$history.currentState().xIsNext ? 'X' : 'O'}</b>
			{:else if $status === 2}
				<b>Draw</b>
			{:else}
				Next player: {$history.currentState().xIsNext ? 'X' : 'O'}
			{/if}
		</div>		
		<div>
			{#if $history.canUndo()}
        <button on:click={history.undo}>&lt;&lt;</button>
			{:else}
				<button disabled>&lt;&lt;</button>
			{/if}
      <select bind:value={current} on:change={()=>history.setCurrent(current)}>
          {#each $history.history as value, i}
            {#if i==0}
              <option value={i}>Go to game start</option>
            {:else}
              <option value={i}>Go to move #{i}</option>
            {/if}
          {/each}
      </select>

    {#if $history.canRedo()}
      <button on:click={history.redo}>&gt;&gt;</button>
    {:else}
      <button disabled>&gt;&gt;</button>
    {/if}
  </div>
	</div>
</div>

<style>
	.game {
		font: 14px "Century Gothic", Futura, sans-serif;
		margin: 20px;
		display: flex;
    flex-direction: column;
    text-align:center;
	}

  .cursorX{
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><text x='50%' y='50%' font-family='sans-serif' font-weight='bold' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='red'>X</text></svg>") 20 20, auto;
  }
  .cursorO{
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><text x='50%' y='50%' font-family='sans-serif' font-weight='bold' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='red'>O</text></svg>") 20 20, auto;
  }



	.game-info {
    order:2;
	}

	.status {
		margin-bottom: 10px;
  }   

  .board {
    order:3;
    display:block;
    margin: 0 auto;
  }

</style>
