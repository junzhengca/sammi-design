export type PrimaryButtonProps = {
    children: React.ReactNode;
}

export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
    return <button className="primary-button">{children}</button>;
}