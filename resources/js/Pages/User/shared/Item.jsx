import { Link } from "@inertiajs/react";
import React from "react";

const Item = ({ user, onDelete }) => {
    return (
        <tr className="py-4">
            <td className="px-3 py-2">{user.id}</td>
            <td className="px-3 py-2">{user.name}</td>
            <td className="px-3 py-2 ">{user.email}</td>
            <td className="px-3 py-2">{user.created_at}</td>
            <td className="flex gap-3">
                <Link
                    href={route("user.edit", user.id)}
                    className="font-medium text-blue-600 hover:underline hover:text-blue-500"
                >
                    Edit
                </Link>
                <button
                    className="font-medium text-red-600 hover:underline hover:red-blue-500"
                    onClick={() => onDelete(user.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Item;
