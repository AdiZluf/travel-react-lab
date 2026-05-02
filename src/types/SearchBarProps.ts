export type SearchBarProps = {
    searchTerm: string;
    selectedFilter: FilterField;
    handleSearchChange: (value: string) => void;
    handleFilterChange: (value: FilterField) => void;
};

export type FilterField = "city" | "category";
