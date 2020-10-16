// Reimplementing base64 is kinda pointless when every modern JS enviroment can do it
export const base64ToBin = (validBase64: string) => {
	if(typeof atob === "undefined"){
		return Buffer.from(validBase64, "base64");
	}
	return new Uint8Array([...atob(validBase64)].map(v => v.charCodeAt(0)));
}
