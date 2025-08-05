import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import customLogger from "../middleware/logger";

const URLForm = ({ onShorten }) => {
    const [urls, setUrls] = useState([{ longUrl: "", validity: "", shortcode: "" }]);

    const handleChange = (index, field, value) => {
        const updated = [...urls];
        updated[index][field] = value;
        setUrls(updated);
    };

    const handleAdd = () => {
        if (urls.length < 5) {
            setUrls([...urls, { longUrl: "", validity: "", shortcode: "" }]);
        }
    };

    const handleSubmit = () => {
        urls.forEach((url, index) => {
            if (!url.longUrl) return;
            const validity = url.validity ? parseInt(url.validity) : 30;
            const shortcode = url.shortcode || null;
            onShorten({ ...url, validity, shortcode });
            customLogger("Shortened URL", { url });
        });
    };

    return (
        <Box>
            {urls.map((url, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                    <TextField
                        label="Long URL"
                        value={url.longUrl}
                        onChange={(e) => handleChange(index, "longUrl", e.target.value)}
                        fullWidth
                        sx={{ mb: 1 }}
                    />
                    <TextField
                        label="Validity (minutes)"
                        type="number"
                        value={url.validity}
                        onChange={(e) => handleChange(index, "validity", e.target.value)}
                        sx={{ mr: 1 }}
                    />
                    <TextField
                        label="Preferred Shortcode"
                        value={url.shortcode}
                        onChange={(e) => handleChange(index, "shortcode", e.target.value)}
                    />
                </Box>
            ))}
            <Button onClick={handleAdd}>Add More</Button>
            <Button variant="contained" onClick={handleSubmit} sx={{ ml: 2 }}>Shorten URLs</Button>
        </Box>
    );
};

export default URLForm;