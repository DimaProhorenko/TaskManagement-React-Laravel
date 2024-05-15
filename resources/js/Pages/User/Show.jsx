import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/constants";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Table from "../Task/shared/Table";

const Show = ({ auth, user, tasks, queryParams = null }) => {
    queryParams = queryParams || {};
    console.log("Tasks", tasks);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {user.name}
                </h2>
            }
        >
            <Head title={user.name} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <img
                                src={user.image_path}
                                className="w-full max-h-96 object-cover"
                            />
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-3 grid-cols-1 mt-4 sm:grid-cols-2">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            User ID
                                        </h4>
                                        <p>{user.id}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            User Name
                                        </h4>
                                        <p>{user.name}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            User Status
                                        </h4>
                                        <p
                                            className={
                                                USER_STATUS_CLASS_MAP[
                                                    user.status
                                                ] +
                                                " rounded-full px-6 py-2 mt-2 inline-block"
                                            }
                                        >
                                            {USER_STATUS_TEXT_MAP[user.status]}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            User Creator
                                        </h4>
                                        <p>{user.created_by.name}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Due Date
                                        </h4>
                                        <p>{user.due_date}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Create Date
                                        </h4>
                                        <p>{user.created_at}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Updated By
                                        </h4>
                                        <p>{user.updated_by.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg font-medium">
                                    User Description
                                </h4>
                                <p>{user.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg mt-6">
                        {tasks.data.length > 0 ? (
                            <Table
                                tasks={tasks}
                                queryParams={queryParams}
                                showUserColumn={false}
                            />
                        ) : (
                            <h2 className="text-white text-center p-4 text-lg font-medium">
                                No tasks assigned
                            </h2>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
