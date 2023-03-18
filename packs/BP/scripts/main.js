import "./resources/test"

import {system} from "@minecraft/server"

system.events.beforeWatchdogTerminate.subscribe(({cancel}) => {
    cancel = true
})

