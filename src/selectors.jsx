export const selectTodos = (state) => state.todos;

export const selectFilteredSortedTodos = (state) => {
	const todos = state.todos;
	const search = state.search.phrase.toLowerCase();
	const isAlphabetSorting = state.sorting?.isAlphabetSorting;

	let filtered = todos;
	if (search) {
		filtered = todos.filter((todo) => todo.title.toLowerCase().includes(search));
	}
	if (isAlphabetSorting) {
		filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
	}
	return filtered;
};

export const selectLoading = (state) => state.loading;
export const selectSearchInput = (state) => state.search.input;
export const selectSearchPhrase = (state) => state.search.phrase;
export const selectIsAlphabetSorting = (state) => state.sorting?.isAlphabetSorting;
