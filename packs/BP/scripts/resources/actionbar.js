import { world, system } from "@minecraft/server";

system.runInterval(() => {
    const players = world.getPlayers()

    for (const player of players) {
        player.onScreenDisplay.setActionBar(`Heat Level: ${world.heatLevel}`)
    }
}, 1)