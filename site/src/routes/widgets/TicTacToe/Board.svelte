<script>
	import { onMount } from 'svelte';
	import { history, status } from './stores.js';
  
  export let height = 3;
  export let width = 3;
	export let cellWidth  = 34;
	export let cellHeight = 34;
	export let colorStroke = "#999";
	$:boardWidth  = 1 + (width * cellWidth);
	$:boardHeight = 1 + (height * cellHeight);
	let canvas;

  let state = {
      bitboard: Array(2).fill(0),
      xIsNext: true,
	};

	history.push(state);

	function handleClick(event) {
		let x = Math.trunc((event.offsetX + 0.5) / cellWidth);
		let y = Math.trunc((event.offsetY + 0.5) / cellHeight);
    let i = 1<<(y * (width+1) + x);

		const state = $history.currentState();
    if ($status == 1 || state.bitboard.reduce((a,b)=>a|b)&i)
			return;
		
		const bitboard = state.bitboard.slice();
		bitboard[state.xIsNext ? 0 : 1] ^= i;
		let newState = {
			bitboard: bitboard,
			xIsNext: !state.xIsNext,
		};
		history.push(newState);
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');

		function draw() {
			ctx.clearRect(0, 0, boardWidth, boardHeight);

			// draw board
			ctx.beginPath();

			// vertical lines
			for (let x = 0; x <= boardWidth; x += cellWidth) {
				ctx.moveTo(0.5 + x, 0);
				ctx.lineTo(0.5 + x, boardHeight);
			}

			// horizontal lines
			for (let y = 0; y <= boardHeight; y += cellHeight) {
				ctx.moveTo(0, 0.5 + y);
				ctx.lineTo(boardWidth, 0.5 +  y);
			}

			// draw the board
			ctx.strokeStyle = colorStroke;
			ctx.stroke();

			ctx.closePath();

			// draw cells
			ctx.beginPath();

			ctx.font = "bold 22px Century Gothic";
			let d = 8;
			let k = 0;

      let p=0;
      while (p<2){
        let bp=$history.currentState().bitboard[p].toString(2).split('').reverse();
        for (let i=0;i<bp.length;i++){
          if (bp[i]=='1'){
            ctx.fillText('XO'[p], i%(width+1) * cellWidth + d + 1, (~~(i/(width+1)) + 1) * cellHeight - d);    
          }
        }
        p++;
      }

			ctx.closePath();

			requestAnimationFrame(draw);
		}

		draw();
	});

</script>

<canvas
				bind:this={canvas}
				width={boardWidth}
				height={boardHeight}
				on:click={handleClick}
				></canvas>

