import { useSearchParams } from 'react-router-dom';

function Color() {
    const [searchParam, setSearchParam] = useSearchParams();
    return (
        <>
            <div>Color: {searchParam.get('filter')}</div>
            <button onClick={() => setSearchParam({ filter: 'Blue' })}>
                Set Blue
            </button>
            <button onClick={() => setSearchParam({ filter: 'Green' })}>
                Set Green
            </button>
            <button onClick={() => setSearchParam({ filter: 'Red' })}>
                Set Red
            </button>
            <button onClick={() => setSearchParam({})}>Reset</button>
        </>
    );
}

export default Color;
