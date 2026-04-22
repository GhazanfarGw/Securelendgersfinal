const SearchBar = ({ setSearch }) => {

return (

<input
type="text"
placeholder="Search blogs..."
className="border p-3 rounded-lg w-full"
onChange={(e) => setSearch(e.target.value)}
/>

)

}

export default SearchBar