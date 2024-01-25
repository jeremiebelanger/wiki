import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [
    starlight({
      title: "Equine Duty",
      social: {
        github: "https://github.com/Equine-Duty",
      },
      sidebar: [
        {
          label: "Bienvenue",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "", link: "/" },
          ],
        },
        {
          label: "API",
          autogenerate: { directory: "api" },
        },
        {
          label: "Client",
          autogenerate: { directory: "client" },
        },
        {
          label: "Admin",
          autogenerate: { directory: "admin" },
        },
      ],
    }),
  ],
});
