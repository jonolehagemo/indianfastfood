import React from "react";
import clsx from "clsx";

export function Input({ className, ...props }) {
    return (
        <input
            className={clsx(
                "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
                className
            )}
            {...props}
        />
    );
}
