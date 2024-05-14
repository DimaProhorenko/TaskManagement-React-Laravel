import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Link } from "@inertiajs/react";
import React from "react";

const Item = ({ task }) => {
    return (
        <tr className="py-4">
            <td className="px-3 py-2">{task.id}</td>
            <td className="px-3 py-2">
                <img
                    src={task.image_path}
                    alt={task.name}
                    className="max-w-10"
                />
            </td>
            <td className="px-3 py-2">{task.name}</td>
            <td className="px-3 py-2 ">
                <span
                    className={
                        "px-3 py-2 rounded-md " +
                        (TASK_STATUS_CLASS_MAP[task.status] || "")
                    }
                >
                    {TASK_STATUS_TEXT_MAP[task.status]}
                </span>
            </td>
            <td className="px-3 py-2">{task.created_at}</td>
            <td className="px-3 py-2">{task.due_date}</td>
            <td className="px-3 py-2">{task.created_by.name}</td>
            <td className="flex gap-3">
                <Link
                    href={route("task.edit", task.id)}
                    className="font-medium text-blue-600 hover:underline hover:text-blue-500"
                >
                    Edit
                </Link>
                <Link
                    href={route("task.destroy", task.id)}
                    className="font-medium text-red-600 hover:underline hover:red-blue-500"
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default Item;
