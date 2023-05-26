import { getShippingShips, getHaulingShips } from "./database.js"


export const shippingShipList = () => {
    const shippers = getShippingShips()
    shippers.sort((a,b) => a.name.localeCompare(b.name))

    let shippersHTML = "<ul>"

    for (const ship of shippers) {
        shippersHTML += `<li data-id ="${ship.id}" data-name ="${ship.name}" data-haulerid ="${ship.haulerId}" data-type ="shippingShip">
        ${ship.id} --- ${ship.name}</li>`
    }

    shippersHTML += "</ul>"

    return shippersHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {
            // Get the haulerId value of the shipping ship clicked
            const shipHaulerId = itemClicked.dataset.haulerid
            // Define a default object for the found hauler
            let defaultObject = { name: "placeholder name" }
            // Iterate the array of hauler objects
            const haulingShipList = getHaulingShips()
            for (const haulingShips of haulingShipList) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(shipHaulerId) === haulingShips.id) {
                    // Reassign the value of `defaultObject` to the current hauler
                    defaultObject = haulingShips
                }
            }
            // Show an alert to the user with this format...// Palais Royal is being hauled by Seawise Giant
            return window.alert(`${itemClicked.dataset.name} is being hauled by ${defaultObject.name}`)
        }
    }
)