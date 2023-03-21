import "./resources/eventHandler"
import "./prototypes/prototypes"
import "./resources/uiScreens"

import {system} from "@minecraft/server"

system.events.beforeWatchdogTerminate.subscribe(({cancel}) => {
    cancel = true
})

