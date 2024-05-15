import EditProjectForm from "@/Components/Forms/EditProjectForm";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Edit = ({ auth, project }) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex gap-4 items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {project.name} Edit
                    </h2>
                </div>
            }
        >
            <Head title={`${project.name} - Edit`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <EditProjectForm project={project} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Edit;
