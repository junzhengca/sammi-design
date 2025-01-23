import { Icon } from "@iconify/react";

export type ProjectSectionTitleProps = {
    title: string;
    description: string;
    buttonChildren: React.ReactNode;
}

export const ProjectSectionTitle = ({ title, description, buttonChildren }: ProjectSectionTitleProps) => {
    return <div className="flex flex-col gap-6 text-center">
        <h2 className="project-title-text text-5xl font-bold">{title}</h2>
        <p className="project-description-text text-lg">{description}</p>
        <div>
            {buttonChildren}
        </div>
    </div>;
}
