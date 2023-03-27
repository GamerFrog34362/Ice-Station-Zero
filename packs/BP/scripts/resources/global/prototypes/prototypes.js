import { Block } from "@minecraft/server";


Block.prototype.setWithProps = function (props) {
    const block = this

    const {x,y,z} = block
    
    
   
    const formattedString = JSON.stringify(props).replace(/^{(.*)}$/, '[$1]');
    block.dimension.runCommandAsync(`setblock ${x} ${y} ${z} ${block.typeId} ${formattedString}`)
    
}