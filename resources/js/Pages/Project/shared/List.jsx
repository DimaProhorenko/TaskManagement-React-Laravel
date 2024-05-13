import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import React from "react";
import Item from "./Item";

const List = ({ projects, queryParams = null }) => {
    queryParams = queryParams || {};

    const handleSearchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams);
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
        router.get(route("project.index", queryParams));
    };
    return (
        <table className="table-auto">
            <thead className="border-b border-slate-200 bg-slate-700">
                <tr className="text-nowrap">
                    <th
                        onClick={(e) => handleSortChanged("id")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        ID
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("image_path")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Image
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("name")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Name
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("status")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Status
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("created_at")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Create Date
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("due_date")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Due Date
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("created_by")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Created By
                    </th>
                    <th
                        onClick={(e) => handleSortChanged("")}
                        className="px-3 py-3 cursor-pointer hover:underline"
                    >
                        Actions
                    </th>
                </tr>
            </thead>
            <thead className="border-b border-slate-200 bg-slate-700">
                <tr className="text-nowrap">
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3">
                        <TextInput
                            placeholder="Project name"
                            className="w-full"
                            defaultValue={queryParams.name || ""}
                            onBlur={(e) =>
                                handleSearchFieldChange("name", e.target.value)
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
                {projects.data.map((project) => (
                    <Item project={project} key={project.id} />
                ))}
            </tbody>
        </table>
    );
};

export default List;
