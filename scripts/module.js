import { setupSettings } from "./settings.js";

export const MODULE_ID = "pf2e-trigger-animations-trove";
Hooks.once("init", async function () {
  setupSettings();
});

Hooks.once("ready", async function () {
  updateModulesEnabledSettings();
});

function updateModulesEnabledSettings() {
  const isJb2aPatreonActive = game.modules.get("jb2a_patreon")?.active;
  game.settings.set(
    MODULE_ID,
    "module-active.jb2a-patreon",
    isJb2aPatreonActive,
  );
}
