import React from "react";
import clsx from "clsx";

export function Button({ className, children, ...props }) {
    return (
        <button
            className={clsx(
                "px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
