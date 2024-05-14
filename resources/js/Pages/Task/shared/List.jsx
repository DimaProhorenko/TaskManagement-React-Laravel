import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React from "react";
import Item from "./Item";
import TableHeading from "@/Components/TableHeading";

const List = ({ tasks, queryParams = null, showProjectColumn }) => {
    queryParams = queryParams || {};
    console.log(showProjectColumn);

    const handleSearchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
    };

    const handleKeyPress = (name, e) => {
        if (e.key !== "Enter") {
            return;
        }
        handleSearchFieldChange(name, e.target.value);
    };

    const handleSortChanged = (fieldName) => {
        if (fieldName === queryParams.sortField) {
            if (queryParams.sortDirection === "desc") {
                queryParams.sortDirection = "asc";
            } else {
                queryParams.sortDirection = "desc";
            }
        } else {
            queryParams.sortField = fieldName;
            queryParams.sortDirection = "desc";
        }
        router.get(route("task.index", queryParams));
    };
    return (
        <div className="overflow-auto">
            <table className="table-auto">
                <thead className="border-b border-slate-200 bg-slate-700">
                    <tr className="text-nowrap">
                        <TableHeading
                            name="id"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            ID
                        </TableHeading>
                        <th className="px-3 py-3">Image</th>
                        {showProjectColumn && <th>Project Name</th>}
                        <TableHeading
                            name="name"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            Name
                        </TableHeading>
                        <TableHeading
                            name="status"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            Status
                        </TableHeading>
                        <TableHeading
                            name="created_at"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            Create Date
                        </TableHeading>
                        <TableHeading
                            name="due_date"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            Due Date
                        </TableHeading>
                        <th className="px-3 py-3">Created By</th>
                        <th className="px-3 py-3">Actions</th>
                    </tr>
                </thead>
                <thead className="border-b border-slate-200 bg-slate-700 w-full">
                    <tr className="text-nowrap">
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                        {showProjectColumn && <th className="px-3 py-3"></th>}
                        <th className="px-3 py-3">
                            <TextInput
                                placeholder="Task name"
                                className="w-full"
                                defaultValue={queryParams.name || ""}
                                onBlur={(e) =>
                                    handleSearchFieldChange(
                                        "name",
                                        e.target.value
                                    )
                                }
                                onKeyPress={(e) => handleKeyPress("name", e)}
                            />
                        </th>
                        <th className="px-3 py-3">
                            <SelectInput
                                className="w-full"
                                defaultValue={queryParams.status}
                                onChange={(e) =>
                                    handleSearchFieldChange(
                                        "status",
                                        e.target.value
                                    )
                                }
                            >
                                <option>Select Status</option>
                                <option value={"pending"}>Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </SelectInput>
                        </th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.data.map((task) => (
                        <Item
                            task={task}
                            key={task.id}
                            showProjectColumn={showProjectColumn}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
