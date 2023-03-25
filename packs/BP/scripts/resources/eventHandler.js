import { world } from "@minecraft/server";
import { showMain } from "./uiScreens";
import { toggleSwitch } from "./rooms/livingQuarters";


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
world.events.leverActivate.subscribe(eventData => {
    const { location } = eventData.block



    
    if ((JSON.stringify(location) == '{"x":-22,"y":68,"z":-15}') || (JSON.stringify(location) == '{"x":-22,"y":68,"z":-18}')){
        toggleSwitch(eventData)
    }

})
//block.setWithProps({"gf:heat_stage": 3})

