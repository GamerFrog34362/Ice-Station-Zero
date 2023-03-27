import { world, system } from "@minecraft/server";
import { radiatorLocations } from "./global/objects";

system.runInterval(()=> {

    const value = Math.ceil(world.heatLevel / 25)
    radiatorLocations.forEach((location) => {
        const block = world.getDimension(`overworld`).getBlock(location)
        block.setWithProps({"gf:heat_stage": value})
        console.warn(value, world.heatLevel);
    })
    world.heatLevel -= 10
    
}, 2000)

