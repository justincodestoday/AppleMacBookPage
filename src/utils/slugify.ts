export const generateSlug = (product: Product, selectedColor: string) => {
  const size = product.size.toLowerCase().replace(" ", "-");
  const color = selectedColor.toLowerCase().replace(" ", "-");
  const chip = product.chip.toLowerCase().replace(" ", "-");
  const cpuSpec = product.specs.find((spec: string) => spec.includes("CPU"));
  const gpuSpec = product.specs.find((spec: string) => spec.includes("GPU"));
  const memorySpec = product.specs.find((spec: string) =>
    spec.includes("Unified Memory")
  );
  const storageSpec = product.specs.find((spec: string) =>
    spec.includes("SSD Storage")
  );

  const cpu = cpuSpec
    ? cpuSpec
        .match(/\d+-core cpu/i)?.[0] // Regex matching one or more digits, case-insensitive (i flag)
        .toLowerCase()
        .replace(" ", "-")
    : "";
  const gpu = gpuSpec
    ? gpuSpec
        .match(/\d+-core gpu/i)?.[0]
        .toLowerCase()
        .replace(" ", "-")
    : "";
  const memory = memorySpec
    ? memorySpec
        .match(/\d+gb unified memory/i)?.[0]
        .toLowerCase()
        .replace("unified memory", "")
        .replace(" ", "")
    : "";
  const storage = storageSpec
    ? storageSpec
        .match(/\d+(gb|tb) ssd storage/i)?.[0] // Regex matching either gb or tb following digits
        .toLowerCase()
        .replace(" ssd storage", "")
    : "";

  return `${size}-${color}-apple-${chip}-with-${cpu}-and-${gpu}-${memory}-${storage}`;
};

export const parseSlug = (slug: string) => {
  const parts: Array<string> = slug.split("-");

  const size: string = `${parts[0]}-${parts[1]}`;
  const colorIndex = parts.indexOf("apple");
  const color: string = parts.slice(2, colorIndex).join(" ");

  const chipIndex = parts.indexOf("with");
  const chip: string = parts.slice(colorIndex + 1, chipIndex).join(" ");

  const cpuIndex = parts.indexOf("and");
  const cpu: string = parts.slice(chipIndex + 1, cpuIndex - 1).join("-");

  const memoryIndex = parts.indexOf("memory");
  const gpu: string = parts.slice(cpuIndex + 1, memoryIndex - 2).join("-");

  const memory: string = parts.slice(memoryIndex - 1, memoryIndex).join(" ");
  const storage: string = parts.slice(memoryIndex).join(" ");

  return { size, color, chip, cpu, gpu, memory, storage };
};
