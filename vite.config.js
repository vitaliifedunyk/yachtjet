import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import injectHTML from "vite-plugin-html-inject";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const base =
  repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base,
  plugins: [tailwindcss(), injectHTML()],
});
