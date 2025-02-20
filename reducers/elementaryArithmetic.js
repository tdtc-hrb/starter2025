export const ElementaryArithmetic = (state, action) =>
	action.type === 'INC'
		? state + 1
		: state;
