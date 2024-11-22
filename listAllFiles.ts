import fs from "fs";
import path from "path";

const listTsFiles = (directory: string): string[] => {
  const tsFiles: string[] = [];

  const walkDirectory = (dir: string): void => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      // Ignore hidden folders, `node_modules`, and `dist`
      if (
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        entry.name !== "node_modules" &&
        entry.name !== "dist"
      ) {
        walkDirectory(fullPath);
      }

      // Add .ts files
      if (entry.isFile() && entry.name.endsWith(".ts")) {
        tsFiles.push(fullPath);
      }
    }
  };

  walkDirectory(directory);
  return tsFiles;
};

// Example usage:
const rootDir = path.resolve("./"); // Replace with your target directory
const tsFiles = listTsFiles(rootDir);
console.log("TypeScript Files:", tsFiles);
