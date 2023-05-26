import { shippingShipList } from "./shippingShips.js"
import { haulingShips } from "./haulerList.js"
import { dockList } from "./dockList.js"

const mainContainer = document.querySelector(".main")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__shippingShipList">
        <h2>Shipping Ship List</h2>
        ${shippingShipList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>Haulers</h2>
        ${haulingShips()}
    </section>
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${dockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

