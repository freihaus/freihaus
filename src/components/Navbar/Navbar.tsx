import { NavbarItems } from "./items";

export default function Navbar() {
    return (
        <nav className="flex justify-around p-4 bg-gray-200 mx-8 border-transparent rounded-b-full items-center">
            {NavbarItems.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                    <a 
                        href={item.link}
                        className="flex border-transparent border-2 hover:border-custom-cyan transition-colors duration-200 px-4 py-2 rounded-full justify-center items-center space-x-2">
                        <item.icon className="h-8 w-8 text-custom-brown" />
                        <span className="hidden md:flex text-custom-brown">{item.name}</span>
                    </a>
                </div>
            ))}
            </nav>
    );
}