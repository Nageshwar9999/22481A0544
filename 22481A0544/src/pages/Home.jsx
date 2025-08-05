import React, { useState } from "react";
import URLForm from "../components/URLForm";
import URLList from "../components/URLList";

const Home = () => {
    const [shortenedUrls, setShortenedUrls] = useState([]);

    const handleShorten = (data) => {
        const shortUrl = window.location.origin + "/" + (data.shortcode || Math.random().toString(36).substring(2, 7));
        setShortenedUrls([...shortenedUrls, { ...data, shortUrl }]);
    };

    return (
        <div>
            <h2>URL Shortener</h2>
            <URLForm onShorten={handleShorten} />
            <URLList shortenedUrls={shortenedUrls} />
        </div>
    );
};

export default Home;