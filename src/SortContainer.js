import React, {useState} from 'react';
import { sort } from 'js-flock';

const arr = [
    1,
    500,
    45,
    2,
    23
]

const SortContainer = () => {
    return (
        <div>
            <h2>An array:</h2>
            <pre>
                { arr.join(', ') }
            </pre>
            <h2>Array sorted desc</h2>
            <pre>
                { sort([...arr]).desc().join(', ') }
            </pre>
        </div>
    )
}

export default SortContainer;