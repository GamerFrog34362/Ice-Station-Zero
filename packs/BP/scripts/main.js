import "./resources/eventHandler"
import "./prototypes/prototypes"
import "./resources/uiScreens"
import "./resources/rooms/livingQuarters"
import "./resources/objects/objects"

import {system} from "@minecraft/server"

system.events.beforeWatchdogTerminate.subscribe(({cancel}) => {
    cancel = true
})

