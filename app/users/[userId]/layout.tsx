export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div>
        <h1>this is is User Route</h1>
        { children }
    </div>
    )
}