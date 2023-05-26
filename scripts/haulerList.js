import { getHaulingShips, getShippingShips } from "./database.js"


export const haulingShips = () => {
    const haulingShips = getHaulingShips()
    haulingShips.sort((a,b) => a.name.localeCompare(b.name))

    let haulingShipsHTML = "<ul>"

    for (const haulers of haulingShips) {
        haulingShipsHTML += `<li data-id="${haulers.id}" data-type="hauler"> ${haulers.id} --- ${haulers.location}</li>`
    }

    haulingShipsHTML += "</ul>"

    return haulingShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let shipCounter = 0
            // Iterate all of the shipping ships
            const shippingShipList = getShippingShips()
            for (const ship of shippingShipList) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerId) {
                    // Increase the counter by 1
                    shipCounter++
                }
            }

            return window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)