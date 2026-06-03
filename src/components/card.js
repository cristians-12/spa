export default function Card(personaje) {

    const { id, name, status, species, image } = personaje

    return (
        `
        <div>
            <img src='${image}' />
            <p>${name}</p>
        </div>
        `
    )
}