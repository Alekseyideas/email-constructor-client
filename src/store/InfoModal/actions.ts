import { ModalActionTypes } from './types';

/**
 *
 * @param {{title: string, message: string}} payload
 */
export const openErrorModal = (payload: { message: string }) => ({
	type: ModalActionTypes.OPEN_ERROR_MODAL,
	payload,
});

export const openModal = (payload: {
	btns?: (
		| { onClick: () => void; bordered: boolean; title: string; id: number }
		| { onClick: () => void; title: string; danger: boolean; id: number }
	)[];
	title: string;
	message: string;
	danger: boolean;
}) => ({
	type: ModalActionTypes.OPEN_MODAL,
	payload,
});
export const closeModal = () => ({
	type: ModalActionTypes.CLOSE_MODAL,
});
