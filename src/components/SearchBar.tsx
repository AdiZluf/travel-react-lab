import type { FilterField, SearchBarProps } from "../types/SearchBarProps";

export function SearchBar(props: SearchBarProps) {
    return (
        <div>
            <input
                type="text"
                value={props.searchTerm}
                onChange={(event) =>
                    props.handleSearchChange(event.target.value)
                }
                placeholder="Search recommendation..."
            />

            <select
                value={props.selectedFilter}
                onChange={(event) =>
                    props.handleFilterChange(event.target.value as FilterField)
                }
            >
                <option value="city">City</option>
                <option value="category">Category</option>
            </select>
        </div>
    );
}