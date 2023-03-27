import { world,DynamicPropertiesDefinition, World } from "@minecraft/server"
world.events.worldInitialize.subscribe(event  => {
    const worldProps = new DynamicPropertiesDefinition()
    worldProps.defineNumber("heatLevel")
    event.propertyRegistry.registerWorldDynamicProperties(worldProps)
    
})

Object.defineProperties(World.prototype, {
    heatLevel: {get() {return (world.getDynamicProperty("heatLevel")) ?? 0}, set(n) {world.setDynamicProperty(`heatLevel`, n)}}
})
