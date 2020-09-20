export interface TInfoModalButtons {
	id?: number;
	onClick: () => void;
	title: string;
	danger: boolean;
	bordered?: boolean;
}

export interface TInfoModalState {
	title: string;
	message: string;
	btns: Array<TInfoModalButtons>;
	open: boolean;
	error: boolean;
	danger: boolean;
}

export const ModalActionTypes = {
	OPEN_ERROR_MODAL: 'OPEN_ERROR_MODAL',
	OPEN_MODAL: 'OPEN_MODAL',
	CLOSE_MODAL: 'CLOSE_MODAL',
};


export enum ActionTypes {
	OPEN_ERROR_MODAL = '@@modal/OPEN_ERROR_MODAL',
	OPEN_MODAL = '@@modal/OPEN_MODAL',
	CLOSE_MODAL = '@@modal/CLOSE_MODAL',
}