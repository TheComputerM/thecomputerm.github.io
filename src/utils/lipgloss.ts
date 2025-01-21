import { Lipgloss, initLip } from "charsm";

const isLipgloss = await initLip();
if (!isLipgloss) {
	throw new Error("Failed to initialize lipgloss");
}
export const lip = new Lipgloss();
