import { Link, useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "../InputLabel";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import InputError from "../InputError";

const CreateProjectForm = () => {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("project.store"));
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-96 space-y-4"
            autoComplete="off"
        >
            <div>
                <InputLabel
                    htmlFor="userName"
                    value="User Name"
                    className="mb-2"
                />
                <TextInput
                    id="userName"
                    name="name"
                    value={data.name}
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    autoComplete="new-password"
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="userEmail"
                    value="User Email"
                    className="mb-2"
                />
                <TextInput
                    type="email"
                    id="userEmail"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    autoComplete="new-password"
                />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="userPassword"
                    value="User Password"
                    className="mb-2"
                />
                <TextInput
                    type="password"
                    id="userPassword"
                    name="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    autoComplete="new-password"
                />
                <InputError message={errors.password} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="confirmPassword"
                    value="Confirm User Password"
                    className="mb-2"
                />
                <TextInput
                    type="password"
                    id="confirmPassword"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    autoComplete="new-password"
                />
                <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                />
            </div>
            <div className="flex gap-4 justify-end">
                <Link
                    href={route("user.index")}
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
