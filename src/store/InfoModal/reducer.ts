// import { Reducer } from 'redux';
import { ModalActionTypes, TInfoModalState, TInfoModalButtons } from './types';

const initialState: TInfoModalState = {
	title: '',
	message: '',
	btns: [] as Array<TInfoModalButtons>,
	open: false,
	error: false,
	danger: false,
};

export const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ModalActionTypes.OPEN_ERROR_MODAL:
			return {
				...state,
				open: true,
				title: action.payload.title,
				message: action.payload.message,
				btns: action.payload.btns || null,
				error: true,
			};
		case ModalActionTypes.OPEN_MODAL:
			return {
				...state,
				open: true,
				title: action.payload.title,
				message: action.payload.message,
				btns: action.payload.btns || null,
				error: false,
				danger: action.payload.danger,
			};
		case ModalActionTypes.CLOSE_MODAL:
			return {
				open: false,
				title: '',
				btns: null,
				message: '',
				error: false,
				danger: false,
			};
		default:
			return state;
	}
};

export { reducer as ModalReducer };
