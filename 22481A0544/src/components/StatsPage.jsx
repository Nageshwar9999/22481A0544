import React from "react";
import { Card, Typography } from "@mui/material";

const StatsPage = ({ stats }) => {
    return (
        <div>
            {stats.map((stat, index) => (
                <Card key={index} sx={{ mb: 2, p: 2 }}>
                    <Typography>Short URL: {stat.shortUrl}</Typography>
                    <Typography>Clicks: {stat.clicks}</Typography>
                    <Typography>Created: {stat.createdAt}</Typography>
                    <Typography>Expires: {stat.expiresAt}</Typography>
                    <Typography>Click Details:</Typography>
                    {stat.clickData.map((click, idx) => (
                        <Typography key={idx}>
                            - {click.timestamp}, {click.source}, {click.location}
                        </Typography>
                    ))}
                </Card>
            ))}
        </div>
    );
};

export default StatsPage;