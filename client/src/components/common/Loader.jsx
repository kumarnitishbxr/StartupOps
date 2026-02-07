import React from "react";
import clsx from "clsx";

const Loader = ({ size = "md", fullScreen = false }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-10 w-10",
  };

  const spinner = (
    <div
      className={clsx(
        "animate-spin rounded-full border-4 border-gray-200 border-t-blue-600",
        sizes[size]
      )}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loader;
