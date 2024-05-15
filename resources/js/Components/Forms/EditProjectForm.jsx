import { Link, useForm } from "@inertiajs/react";
import React from "react";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

const EditProjectForm = ({ project }) => {
    const { data, setData, post, errors } = useForm({
        image_path: project.image_path || "",
        name: project.name,
        description: project.description,
        due_date: project.due_date,
        status: project.status,
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("project.update", project.id));
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
            {project.image_path && (
                <div className="max-w-40">
                    <img
                        className="block max-w-full object-cover"
                        src={project.image_path}
                    />
                </div>
            )}
            <div>
                <InputLabel
                    htmlFor="projectImage"
                    value="Project Image"
                    className="mb-2"
                />
                <TextInput
                    id="projectImage"
                    name="image_path"
                    type="file"
                    onChange={(e) => setData("image_path", e.target.files[0])}
                />
                <InputError message={errors.image_path} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="name"
                    value="Project Name"
                    className="mb-2"
                />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="projectDescription"
                    value="Project Description"
                    className="mb-2"
                />
                <TextAreaInput
                    id="projectDescription"
                    name="description"
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                ></TextAreaInput>
                <InputError message={errors.description} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="project_due_date"
                    value="Project Deadline"
                />

                <TextInput
                    id="project_due_date"
                    type="date"
                    name="due_date"
                    value={data.due_date}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("due_date", e.target.value)}
                />

                <InputError message={errors.due_date} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="status"
                    value="Project Status"
                    className="mb-2"
                />
                <SelectInput
                    className="w-full"
                    onChange={(e) => setData("status", e.target.value)}
                    value={data.status}
                >
                    <option>Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
            </div>
            <div className="flex gap-4 justify-end">
                <Link
                    href={route("project.index")}
                    className="block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-base"
                >
                    Back
                </Link>
                <PrimaryButton className="!text-sm !capitalize">
                    Update
                </PrimaryButton>
            </div>
        </form>
    );
};

export default EditProjectForm;
