import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Link } from "@inertiajs/react";
import React from "react";

const Item = ({ project, onDelete }) => {
    return (
        <tr className="py-4">
            <td className="px-3 py-2">{project.id}</td>
            <td className="px-3 py-2">
                <img
                    src={project.image_path}
                    alt={project.name}
                    className="max-w-10"
                />
            </td>
            <td className="px-3 py-2">
                <Link
                    href={route("project.show", project.id)}
                    className="hover:underline"
                >
                    {project.name}
                </Link>
            </td>
            <td className="px-3 py-2 ">
                <span
                    className={
                        "px-3 py-2 rounded-md " +
                        (PROJECT_STATUS_CLASS_MAP[project.status] || "")
                    }
                >
                    {PROJECT_STATUS_TEXT_MAP[project.status]}
                </span>
            </td>
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
                <button
                    className="font-medium text-red-600 hover:underline hover:red-blue-500"
                    onClick={() => onDelete(project.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Item;
