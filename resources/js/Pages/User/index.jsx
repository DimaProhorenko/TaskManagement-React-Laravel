import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import List from "./shared/List";
import Pagination from "@/Components/Pagination";

const index = ({ auth, users, queryParams }) => {
    console.log(users);
    const handleUserDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete the user?")) {
            return;
        }
        router.delete(route("user.destroy", id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex gap-4 items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Users
                    </h2>
                    <Link
                        href={route("user.create")}
                        className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-emerald-700 transition-colors"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Users" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <List
                                users={users}
                                queryParams={queryParams}
                                onUserDelete={handleUserDelete}
                            />
                            <Pagination links={users.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
