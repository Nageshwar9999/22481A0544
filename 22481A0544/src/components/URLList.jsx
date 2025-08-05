import React from "react";
import { Card, Typography } from "@mui/material";

const URLList = ({ shortenedUrls }) => {
    return (
        <div>
            {shortenedUrls.map((item, index) => (
                <Card key={index} sx={{ mb: 2, p: 2 }}>
                    <Typography>Original: {item.longUrl}</Typography>
                    <Typography>Short: {item.shortUrl}</Typography>
                    <Typography>Expires in: {item.validity} mins</Typography>
                </Card>
            ))}
        </div>
    );
};

export default URLList;