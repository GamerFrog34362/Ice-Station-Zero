import {LeverActionEvent, world} from "@minecraft/server"
import { leverLocations, lightsLocations } from "../objects/objects";
/**
 * 
 * @param {LeverActionEvent} event 
 */
export function toggleSwitch(event) {
    const {location} = event.block
    
    switch (JSON.stringify(location)) {
        case leverLocations.livingQuarters_door:
            console.warn(`doors`);

            break;
        
            case leverLocations.livingQuarters_lights:
            lights(lightsLocations.livingQuarters, event.isPowered)
            
             
            break;


        default:
            break;
    }

}
/**let lanternArray = []
world.events.blockBreak.subscribe(eventData => {
    
    if(eventData.brokenBlockPermutation.type.id != "minecraft:sea_lantern") return;
    
    
    lanternArray.push(eventData.block.location)
    console.warn(JSON.stringify(lanternArray));
})**/



/**
 * 
 * @param {Vector3[]} lightArray 
 * @param {Boolean} mode
 */
function lights(lightArray, mode) {
    lightArray.forEach((element) => {
        world.getDimension(`overworld`).runCommandAsync(`setblock ${element.x} ${element.y} ${element.z} ${mode? `air`: `sea_lantern`}`)
    })
}





