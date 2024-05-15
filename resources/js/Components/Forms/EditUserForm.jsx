import { Link, useForm } from "@inertiajs/react";
import React from "react";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";

const EditUserForm = ({ user }) => {
    const { data, setData, post, errors } = useForm({
        name: user.name,
        email: user.email,
        password: "",
        password_confirmation: "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("user.update", user.id));
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
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
                    onChange={(e) => setData("name", e.target.value)}
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
                    id="userEmail"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                ></TextInput>
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
                <InputLabel
                    htmlFor="userPassword"
                    value="New User Password"
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
                    Update
                </PrimaryButton>
            </div>
        </form>
    );
};

export default EditUserForm;
