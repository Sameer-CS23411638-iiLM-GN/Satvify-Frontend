import "./CategoryFilter.css";

type Props = {
    selected: string;
    onSelect: (category: string) => void;
};

function CategoryFilter({ selected, onSelect }: Props) {
    const categories = [
        "All",
        "Salads",
        "Bowls",
        "Beverages",
        "Meal Plans",
    ];

    return (
        <div className="filter-container">
            {categories.map((category) => (
                <button
                    key={category}
                    className={selected === category ? "active-filter" : ""}
                    onClick={() => onSelect(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;