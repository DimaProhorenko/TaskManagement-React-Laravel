import { Link } from "@inertiajs/react";
import React from "react";

const Item = ({ project }) => {
    return (
        <tr>
            <td className="px-3 py-2">{project.id}</td>
            <td className="px-3 py-2">
                <img
                    src={project.image_path}
                    alt={project.name}
                    className="max-w-10"
                />
            </td>
            <td className="px-3 py-2">{project.name}</td>
            <td className="px-3 py-2">{project.status}</td>
            <td className="px-3 py-2">{project.created_at}</td>
            <td className="px-3 py-2">{project.due_date}</td>
            <td className="px-3 py-2">{project.created_by.name}</td>
            <td className="flex gap-3">
                <Link
                    href={route("project.edit", project.id)}
                    className="font-medium text-blue-600 hover:underline hover:text-blue-500"
                >
                    Edit
                </Link>
                <Link
                    href={route("project.destroy", project.id)}
                    className="font-medium text-red-600 hover:underline hover:red-blue-500"
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default Item;
