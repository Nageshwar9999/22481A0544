import React from "react";
import StatsPage from "../components/StatsPage";

const dummyStats = [
    {
        shortUrl: "http://localhost:3000/abcd",
        clicks: 5,
        createdAt: "2025-08-01",
        expiresAt: "2025-08-01T01:00:00",
        clickData: [
            { timestamp: "2025-08-01T00:10:00", source: "browser", location: "India" },
            { timestamp: "2025-08-01T00:20:00", source: "email", location: "US" },
        ],
    },
];

const Stats = () => <StatsPage stats={dummyStats} />;

export default Stats;