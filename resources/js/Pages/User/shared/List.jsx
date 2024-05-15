import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import React from "react";
import Item from "./Item";
import TableHeading from "@/Components/TableHeading";

const List = ({ users, queryParams = null, onUserDelete }) => {
    queryParams = queryParams || {};

    const handleSearchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("user.index"), queryParams);
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
        router.get(route("user.index", queryParams));
    };
    return (
        <div className="overflow-auto">
            <table className="table-auto">
                <thead className="border-b border-slate-200 bg-slate-700">
                    <tr className="text-nowrap">
                        <th>Id</th>
                        <TableHeading
                            name="name"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            Name
                        </TableHeading>
                        <th>Email</th>
                        <TableHeading
                            name="created_at"
                            sortField={queryParams.sortField}
                            sortDirection={queryParams.sortDirection}
                            handleSort={handleSortChanged}
                        >
                            Create Date
                        </TableHeading>
                        <th className="px-3 py-3">Actions</th>
                    </tr>
                </thead>
                <thead className="border-b border-slate-200 bg-slate-700">
                    <tr className="text-nowrap">
                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3">
                            <TextInput
                                placeholder="User name"
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
                            <TextInput
                                placeholder="Email"
                                className="w-full"
                                defaultValue={queryParams.email || ""}
                                onBlur={(e) =>
                                    handleSearchFieldChange(
                                        "email",
                                        e.target.value
                                    )
                                }
                                onKeyPress={(e) => handleKeyPress("email", e)}
                            />
                        </th>

                        <th className="px-3 py-3"></th>
                        <th className="px-3 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((user) => (
                        <Item
                            user={user}
                            key={user.id}
                            onDelete={onUserDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
