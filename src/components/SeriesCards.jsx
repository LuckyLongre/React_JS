// Import our series data from a JSON file
// This file contains an array of series/shows with their details
import apiData from "../api/apiData.json";
// Import the Card component that will be used to display individual series
import { Card } from "./Card";

// SeriesCards component - Responsible for rendering the list of all series
// This component acts as a container/parent for individual Card components
export const SeriesCards = () => {
    return (
        // Create an unordered list with Tailwind CSS classes for styling
        // flex flex-col: Creates a vertical flex container
        // gap-6: Adds spacing between cards
        // bg-gray-950: Very dark background color
        // p-6: Padding all around
        // rounded-2xl: Rounded corners
        <ul className="flex flex-col gap-6 bg-gray-950 p-6 rounded-2xl">
            {/* Map through the API data to create a Card component for each series */}
            {/* key prop is required by React for efficient list rendering */}
            {/* data prop passes all series information to the Card component */}
            {apiData.map((curEl) => 
                <Card key={curEl.id} data={curEl} />
            )}
        </ul>
    )
}