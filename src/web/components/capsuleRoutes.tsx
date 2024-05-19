import React from "react";

const getTableContent = (data: any) => {
    var rows = [];
    for (let i = 0; i < data.length; i++) {
        const start_date = new Date(data[i].date_start);
        const end_date = new Date(data[i].date_end);
        const duration = end_date.valueOf() - start_date.valueOf();
        // conversion to human readable format
        let seconds = Math.floor(duration / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        // end of conversion
        rows.push(
            <tr key={data[i].ride_id}>
                <td>{start_date.toLocaleString("pl-PL", {timeZone: "UTC"})}</td>
                <td>{end_date.toLocaleString("pl-PL", {timeZone: "UTC"})}</td>
                <td>{data[i].tubes.stations_tubes_starting_station_idTostations.name}</td>
                <td>{data[i].tubes.stations_tubes_ending_station_idTostations.name}</td>
                <td>{hours !== 0 ? hours+"h " : ""}{minutes}m {seconds}s</td> 
            </tr>
        ); 
    }
    return rows;
}

const CapsuleRoutes = async ({
    id,
    from,
    to
}: {
    id: string;
    from: string;
    to: string;
}) => {
    const routes = await (await fetch(`http://localhost:3000/api/reports/getCapsuleRoutes?id=${id}&from=${from}&to=${to}`)).json();
    const tableContent = getTableContent(routes.data);
    if (tableContent.length === 0) {
        return (
            <div>
                <h3>Route history</h3>
                <p>No routes found for this capsule in the selected time period</p>
            </div>
        )
    }
    return (
        <div>
            <h3>Route history</h3>
            <table>
                <thead>
                    <tr key="head">
                        <th>Departure time</th>
                        <th>Arrival time</th>
                        <th>Start</th>
                        <th>Destination</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        </div>
    )
};

export default CapsuleRoutes;

export const dynamic = 'force-dynamic';