import { writable } from 'svelte/store';

export function calculateWinner(bitboard,width,height) {
    const L=Math.min(width,height);
    const win_conditions=[1,width,width+1,width+2];

    let p=0;
    while (p<2){
        for (let d = 0; d < win_conditions.length; d++) {
            let bb=bitboard[p]
            for (let i=1; i<L;i++){
                bb&=bitboard[p]>>(i*win_conditions[d]);
            }
            if (bb!=0){
                return p+1;
            }
        }
        p++;
    }
    return null;
}

function createCount() {
	const { subscribe, set } = writable(3);

	return {
		subscribe,
		set: n => {set(n);console.log(n);}
	}
}
export let width=createCount();
export let height=createCount();
