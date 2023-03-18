import { world } from "@minecraft/server";


world.events.chat.subscribe(eventData => {
    console.warn(eventData.message);
})