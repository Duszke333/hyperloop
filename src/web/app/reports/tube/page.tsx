import React from "react";
// import "../globals.css";
import ReportTopBar from "@/components/reportTopBar";
import TubeTrips from "@/components/tubeTrips";
import ChartComponent from "@/components/chart";

const GenerateTubeReport = () => {
    return (
        <>
            <ReportTopBar type="tube" target="A-B" />
            <TubeTrips />
            <h3>Generated power</h3>
            <ChartComponent type={'line'} url={'http://localhost:3000/api/reports/getPowerStats?id=1&from=2022-01-01&to=2025-01-01'} labels_key="time_of_measurement" data_key="generated_power" label_name="Power"/>
            <h3>Tube pressure</h3>
            <ChartComponent type={'line'} url={'http://localhost:3000/api/reports/getPressureStats?id=1&from=2022-01-01&to=2025-01-01'} labels_key="time_of_measurement" data_key="pressure" label_name="Pressure"/>
        </>
    ); // for now params are hardcoded
};

export default GenerateTubeReport;