import React from "react";
import Item from "./Item";

const List = ({ projects }) => {
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
            <tbody>
                {projects.data.map((project) => (
                    <Item project={project} key={project.id} />
                ))}
            </tbody>
        </table>
    );
};

export default List;
