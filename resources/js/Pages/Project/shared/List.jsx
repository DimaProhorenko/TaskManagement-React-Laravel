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
    return (
        <table className="table-auto">
            <thead className="border-b border-slate-200 bg-slate-700">
                <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Image</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Create Date</th>
                    <th className="px-3 py-3">Due Date</th>
                    <th className="px-3 py-3">Created By</th>
                    <th className="px-3 py-3">Actions</th>
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
                            onBlur={(e) =>
                                handleSearchFieldChange("name", e.target.value)
                            }
                            onKeyPressed={(e) => handleKeyPress("name", e)}
                        />
                    </th>
                    <th className="px-3 py-3">
                        <SelectInput
                            className="w-full"
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
