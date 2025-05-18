type ModelNames = "gpt-40" | "o3-mini" | (string & {});

const model1: ModelNames = "gpt-40"; // auto complete
const model2: ModelNames = "loose"; // not auto complete but ok
