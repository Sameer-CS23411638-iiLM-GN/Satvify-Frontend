import "./SearchBar.css";

type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
};

function SearchBar({
    searchTerm,
    setSearchTerm,
}: SearchBarProps) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;