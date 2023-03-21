import { world } from "@minecraft/server";
import { showMain } from "./uiScreens";


world.events.itemUse.subscribe(eventData => {
    const {source: player, item} = eventData
    switch (item.typeId) {
        case "gf:clipboard":
            showMain(player)
            break;
    
        default: return;
            break;
    }

})

//block.setWithProps({"gf:heat_stage": 3})