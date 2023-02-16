import create from "zustand";

const userStore = create((set) => ({
	token: { token: "" },

	addToken: (key) =>
		set((state) => ({
			token: { ...state.token, token: key.token },
		})),

	removeToken: () =>
		set((state) => ({
			token: { ...state.token, token: "" },
		})),

	
		
}));

export default userStore