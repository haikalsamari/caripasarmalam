import { Icons } from "@/utils/icons";

export default function Header() {
    return (
        <>
            <div className="flex justify-between items-end">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">CariPasarMalam</h2>
                <div className="flex flex-row gap-6">
                    <p className="text-sm md:text-md text-gray-500">About</p>
                    <Icons.GitHub size={24} className="text-gray-500"/>
                </div>
            </div>
            <div className="flex flex-col items-center mt-5 max-w-2xl mx-auto">
                <h2 className="text-3xl text-center sm:text-4xl md:text-5xl mt-6 font-bold">Find Nearest Night Market</h2>
                <p className="mt-3 lg:text-md text-gray-500">Search for the nearest night market to your location</p>
                <div className="relative w-full max-w-full mt-6">
                    <input 
                        className="w-full pl-12 bg-white pr-4 py-3 rounded-full border border-gray-300 
                                 text-gray-600 text-sm placeholder:text-gray-400
                                 focus:outline-none focus:ring-2 focus:border-transparent
                                 transition-all duration-300"
                        placeholder="Search by location name..."
                        type="search"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <Icons.SearchIcon 
                            size={20}
                            className="transition-colors duration-300" 
                        />
                    </div>
                </div>            
            </div>
        </>
    )
}