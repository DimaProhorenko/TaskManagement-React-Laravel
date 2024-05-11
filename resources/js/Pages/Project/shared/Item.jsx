import React from "react";

const Item = ({ project }) => {
    return (
        <tr key={project.id}>
            <td className="px-3 py-2">{project.id}</td>
            <td className="px-3 py-2">{project.image || "No image"}</td>
            <td className="px-3 py-2">{project.name}</td>
            <td className="px-3 py-2">{project.status}</td>
            <td className="px-3 py-2">{project.created_at}</td>
            <td className="px-3 py-2">{project.due_date}</td>
            <td className="px-3 py-2">{project.created_by.name}</td>
        </tr>
    );
};

export default Item;
