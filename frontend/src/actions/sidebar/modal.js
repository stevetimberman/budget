export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"
export const SET_VALUE = "SET_VALUE"

export function setVal(val) {
	console.log("Set Val");
	return { type: SET_VALUE, payload: val }
}

export function openModal(){
	console.log("Open Modal");
	return { type: OPEN_MODAL }
}

export function closeModal(){
	console.log("Close Modal");
	return { type: CLOSE_MODAL }
}