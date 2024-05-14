import React from "react";

const FileInput = ({ id, ...restProps }) => {
    return (
        <div className="flex gap-5 items-center">
            <label
                htmlFor={id}
                className="px-3 py-2 rounded-lg bg-slate-700 cursor-pointer"
            >
                Choose file
            </label>
            <input type="file" id={id} hidden {...restProps} />
            <label htmlFor={id} className="cursor-pointer">
                Please select a file
            </label>
        </div>
    );
};

export default FileInput;
