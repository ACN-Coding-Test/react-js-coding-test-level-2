interface TitleProps {
    children: React.ReactNode;
    className?: string;
}
export default function Title({ children, className }: TitleProps) {
    return <div className={`text-title-text text-22 ${className}`}>{children}</div>
}