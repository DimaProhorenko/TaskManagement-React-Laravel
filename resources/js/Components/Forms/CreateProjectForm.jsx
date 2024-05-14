import { Link, useForm } from "@inertiajs/react";
import React from "react";
import FileInput from "../FileInput";
import InputLabel from "../InputLabel";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import PrimaryButton from "../PrimaryButton";
import InputError from "../InputError";

const CreateProjectForm = () => {
    const { data, setData, post, errors } = useForm({
        image_path: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("project.store"));
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-96 space-y-4">
            <div>
                <InputLabel
                    htmlFor="projectImage"
                    value="Project Image"
                    className="mb-3"
                />
                <FileInput
                    id="projectImage"
                    name="image"
                    value={data.image_path}
                    onChange={(e) => setData("image_path", e.target.value)}
                />
                <InputError message={errors.image} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="projectName"
                    value="Project Name"
                    className="mb-2"
                />
                <TextInput
                    id="projectName"
                    name="name"
                    value={data.name}
                    isFocused={true}
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
                />
                <InputError message={errors.description} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="dueDate"
                    value="Project Deadline"
                    className="mb-2"
                />
                <TextInput
                    type="date"
                    id="dueDate"
                    name="due_date"
                    value={data.due_date}
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
                    Create
                </PrimaryButton>
            </div>
        </form>
    );
};

export default CreateProjectForm;
