import React from "react";
import clsx from "clsx";

export function Card({ className, children }) {
    return (
        <div className={clsx("bg-white rounded-2xl shadow-md", className)}>
            {children}
        </div>
    );
}

export function CardContent({ className, children }) {
    return (
        <div className={clsx("p-4", className)}>
            {children}
        </div>
    );
}
