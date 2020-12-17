import React from 'react';
import axios from 'axios'

function callServer() {
    axios.get('http://localhost:8000/test', {
        params: {
            table: 'sample',
            rows: [
                {name: 'twerpy'},
                {name: 'burpy'},
            ],
        },
    }).then((response) => {
        console.log(JSON.stringify(response.data));
    });
}

export function SampleComponent() {
    return (
        <div>
            { callServer() }
            This is a sample component
        </div>
    );
}

