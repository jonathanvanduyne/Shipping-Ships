const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, location: "Shanghai, China", cargoShips: 3, name: "Captain Phillips" },
        { id: 2, location: "Busan, South Korea", cargoShips: 3, name: "Gilligans Island" },
        { id: 3, location: "Rotterdam, The Netherlands", cargoShips: 2, name: "Red October" },
        { id: 4, location: "Antwerp, Belgium", cargoShips: 2, name: "Poseidan" },
    ],
    shippingShips: [
        { id: 1, name: "Esso Atlantic", haulerId: 1 },
        { id: 2, name: "Prairial", haulerId: 2 },
        { id: 3, name: "Palais Royal", haulerId: 3 },
        { id: 4, name: "Rivoli", haulerId: 4 },
        { id: 5, name: "Champs Elysee", haulerId: 1 },
        { id: 6, name: "Ever Ace", haulerId: 2 },
        { id: 7, name: "Nissei Maru", haulerId: 3 },
        { id: 8, name: "MSC Gulsun", haulerId: 4 },
        { id: 9, name: "HMM Rotterdam", haulerId: 1 },
        { id: 10, name: "CMA CGM Trocadero", haulerId: 2 },
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({ ...docks }))
}

export const getHaulingShips = () => {
    return database.haulers.map(haulers => ({ ...haulers }))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippers => ({ ...shippers }))
}