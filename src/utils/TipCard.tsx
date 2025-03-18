import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

export default function TipCard({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="bg-theme-background-purple p-3 rounded-lg mt-10 ">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          className="text-theme-purple-default text-xl"
        />
        <span className="font-semibold text-sm">{title}</span>
      </div>
      <p className="text-sm mt-3">{description}</p>
    </div>
  );
}
