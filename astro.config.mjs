import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/Equine-Duty",
  base: "/wiki",
  integrations: [
    starlight({
      title: "Equine Duty",
      social: {
        github: "https://github.com/Equine-Duty",
      },
      sidebar: [
        {
          label: "Equine Duty",
          autogenerate: { directory: "home" },
        },
        {
          label: "API",
          autogenerate: { directory: "api" },
          collapsed: true,
        },
        {
          label: "Client",
          autogenerate: { directory: "client" },
          collapsed: true,
        },
        {
          label: "Admin",
          autogenerate: { directory: "admin" },
          collapsed: true,
        },
        {
          label: "Gestion",
          autogenerate: { directory: "gestion" },
          collapsed: true,
        },
      ],
    }),
  ],
});
