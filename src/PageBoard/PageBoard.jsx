export const PageBoard = ( {events} ) => {
    return(
        <ul>{events.map((event) => (
            <li>{event.name}</li>
        ))}

        </ul>
    )
}
