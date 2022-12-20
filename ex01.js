// PRIMEIRO EXERCÍCIO DE MAP: TRANSFORMAR UMA LISTA EM OUTRA
const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false }
]

// TEM QUE RESULTAR EM: 
// const list = [
//     { name: "Rodolfo", vip: true, sector: "Black"},
//     { name: "Maria", vip: false, sector: "Green"},
//     { name: "João", vip: true, sector: "Black"},
//     { name: "Bruno", vip: true, sector: "Black"},
//     { name: "Carla", vip: false, sector: "Green"},
//     { name: "Ana", vip: true, sector: "Black"},
//     { name: "Julio", vip: false, sector: "Green"},
// ];

const newList = list.map((client) => {
    if (client.vip === true) {
        const newClientArea = {
            name: client.name,
            vip: client.vip,
            sector: "Black"
        }
        return newClientArea 
    } else {
        const newClientArea = {
            name: client.name,
            vip: client.vip,
            sector: "Green"
        }
        return newClientArea 
    }
    
})

console.log(newList)
