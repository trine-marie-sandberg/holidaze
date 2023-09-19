import { useState, useEffect } from "react";
import { useLoad } from "../../hooks/storage";
import useFetch from "../../hooks/api";

export default function VenueManagerTab(props) {

    const [
        data,
        load,
        error,
    ] = props.children;
    console.log(data);
    
    return(
        <div>
            <h2>My venues</h2>
            <p>Currently no venues</p>
        </div>
    )
}