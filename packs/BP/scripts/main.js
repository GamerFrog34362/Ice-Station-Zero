import "./resources/eventHandler"
import "./resources/global/prototypes/prototypes"
import "./resources/uiScreens"
import "./resources/rooms/livingQuarters"
import "./resources/global/objects"
import "./resources/global/properties"
import "./resources/heat"
import "./resources/actionbar"

import {system} from "@minecraft/server"



system.events.beforeWatchdogTerminate.subscribe(({cancel}) => {
    cancel = true
})

