

const Search = ({ state, restaurantState, filterState }) => {
    const [query, setQuery] = state;
    return (
        <div className="searchBar">

            <input onChange={(event) => {
                const { value } = event.target;
                setQuery(value)
               
            }} value={query} type="text" placeholder="Search..." />
            
            <button onClick={
                ()=>{
                    const filterRestaurnts = restaurantState[0].filter((item) => {
                        return item?.info?.name?.toLowerCase()?.includes(query.toLowerCase())
                    })
                    filterState[1](filterRestaurnts)
                }
            }>Search</button>
        </div>
    )
};


export default Search;