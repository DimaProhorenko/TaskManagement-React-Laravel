import Pagination from "@/Components/Pagination";
import React from "react";
import List from "./List";

const Table = ({ tasks, queryParams, showProjectColumn = true }) => {
    console.log("Table", showProjectColumn);
    return (
        <div className="p-6 text-gray-900 dark:text-gray-100">
            <List
                tasks={tasks}
                queryParams={queryParams}
                showProjectColumn={showProjectColumn}
            />
            <Pagination links={tasks.meta.links || []} />
        </div>
    );
};

export default Table;
