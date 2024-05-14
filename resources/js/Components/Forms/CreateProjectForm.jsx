import { Link, useForm } from "@inertiajs/react";
import React from "react";
import FileInput from "../FileInput";
import InputLabel from "../InputLabel";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import PrimaryButton from "../PrimaryButton";

const CreateProjectForm = () => {
    const { data, setData, post, errors } = useForm({
        image: "",
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
                    value={data.image}
                    onChange={(e) => setData("image", e.target.value)}
                />
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
            </div>
            <div>
                <InputLabel
                    htmlFor="dueDate"
                    value="Project Deadline"
                    className="mb-2"
                />
                <TextInput
                    id="dueDate"
                    name="due_date"
                    value={data.due_date}
                    placeholder="mm/dd/yyyy"
                    onChange={(e) => setData("due_date", e.target.value)}
                />
            </div>
            <div>
                <InputLabel
                    htmlFor="status"
                    value="Project Status"
                    className="mb-2"
                />
                <SelectInput
                    className="w-full"
                    onChange={(e) => setData("status", e.taget.value)}
                >
                    <option>Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </SelectInput>
            </div>
            <div className="flex gap-4 justify-end">
                <Link
                    href={route("project.index")}
                    className="inline-block px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                    Back
                </Link>
                <PrimaryButton className="!text-sm">Create</PrimaryButton>
            </div>
        </form>
    );
};

export default CreateProjectForm;
