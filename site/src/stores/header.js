import { writable } from "svelte/store";

const createStore = () => {
    const { subscribe, update } = writable({
        header: {
			isTransparent: true,
			isOpen: false,
            },
        scrollBarProgress: {
            isVisible: false,
            readingTime: {},
            },
        });

    return {
		subscribe,
        setHeaderTransparent: (value) =>
        update((store) => ({
            ...store,
            header: {
				isTransparent: value,
                },
			})),

		setHeaderOpen: (value) =>
		update((store)=>({
			...store,
			header: {
				isOpen:(value!==false?true:false),
				}
			})),

        setScrollBarProgressVisible: (isVisible, readingTime) =>
        update((store) => ({
            ...store,
            scrollBarProgress: {
                isVisible,
                readingTime,
                },
            })),
        };
};

export default createStore();
