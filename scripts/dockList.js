import { getDocks, getHaulingShips } from "./database.js"


export const dockList = () => {
    const docks = getDocks()
    docks.sort((a,b) => a.location.localeCompare(b.location))

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-dockid ="${dock.id}" data-docklocation ="${dock.location}" data-dockvolume ="${dock.volume}" data-type ="docks">
        ${dock.id} --- ${dock.location} --- ${dock.volume}
        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //Was a dock list item clicked on?
        if (itemClicked.dataset.type === "docks") {
            //define the dock location to a variable
            const currentDock = itemClicked.dataset.docklocation
            // create an empty array variable to start a list
            let haulerList = []
            const haulingShipList = getHaulingShips()
            // iterate through the haulers to match location
            for (const hauler of haulingShipList) {
                // if location matches, add that hauler to the empty array
                if (currentDock === hauler.location) {
                    haulerList.push(hauler.name)
                }
            }
            //show alert with the text "The Shanghai, China dock is currently unloading Boaty McBoatface"
            if (haulerList.length >= 1) {
                return window.alert(`The ${itemClicked.dataset.docklocation} dock is currently unloading ${haulerList}`)
            }
            // If there is no hauler at the dock, present the following message. The Shanghai, China dock is currently unloading nothing
            if (haulerList.length = 0) {
                return window.alert(`The ${itemClicked.dataset.docklocation} dock is currently unloading nothing`)
            }
        }
    }
)

