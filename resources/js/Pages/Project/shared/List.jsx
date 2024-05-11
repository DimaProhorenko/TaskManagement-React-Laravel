import React from "react";
import Item from "./Item";

const List = ({ projects }) => {
    return (
        <table className="table-auto">
            <thead>
                <tr className="text-nowrap">
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Image</th>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Create Date</th>
                    <th className="px-3 py-2">Due Date</th>
                    <th className="px-3 py-2">Created By</th>
                    <th className="px-3 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.data.map((project) => (
                    <Item project={project} />
                ))}
            </tbody>
        </table>
    );
};

export default List;
