export type SearchBarProps = {
    searchTerm: string;
    selectedFilter: string;
    handleSearchChange: (value: string) => void;
    handleFilterChange: (value: string) => void;
};