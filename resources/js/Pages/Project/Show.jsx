import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import Table from "../Task/shared/Table";

const Show = ({ auth, project, tasks, queryParams = null }) => {
    queryParams = queryParams || {};
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {project.name}
                </h2>
            }
        >
            <Head title={project.name} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <img
                                src={project.image_path}
                                className="w-full max-h-72 object-cover"
                            />
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-3 grid-cols-1 mt-4 sm:grid-cols-2">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Project ID
                                        </h4>
                                        <p>{project.id}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Project Name
                                        </h4>
                                        <p>{project.name}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Project Status
                                        </h4>
                                        <p
                                            className={
                                                PROJECT_STATUS_CLASS_MAP[
                                                    project.status
                                                ] +
                                                " rounded-full px-6 py-2 mt-2 inline-block"
                                            }
                                        >
                                            {
                                                PROJECT_STATUS_TEXT_MAP[
                                                    project.status
                                                ]
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Project Creator
                                        </h4>
                                        <p>{project.created_by.name}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Due Date
                                        </h4>
                                        <p>{project.due_date}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Create Date
                                        </h4>
                                        <p>{project.created_at}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            Updated By
                                        </h4>
                                        <p>{project.updated_by.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg font-medium">
                                    Project Description
                                </h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg mt-6">
                        <Table
                            tasks={tasks}
                            queryParams={queryParams}
                            showProjectColumn={false}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
