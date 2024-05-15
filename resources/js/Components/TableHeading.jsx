import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React from "react";

const TableHeading = ({
    children,
    name,
    sortable = true,
    sortDirection = null,
    sortField = null,
    handleSort = () => {},
}) => {
    return (
        <th
            onClick={(e) => handleSort(name)}
            className="px-3 py-3 cursor-pointer hover:underline "
        >
            {!sortable && children}
            {sortable && (
                <div className="flex items-center justify-center gap-1">
                    <span>{children}</span>
                    <div className="text-slate-400">
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sortField === name && sortDirection === "asc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 " +
                                (sortField === name && sortDirection === "desc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                    </div>
                </div>
            )}
        </th>
    );
};

export default TableHeading;
