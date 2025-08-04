import Header from "@/components/common/Header";
import LocationCardLayout from "@/features/location/components/card/LocationCardLayout";

export default function HomeLayout() {
    return (
        <>
            <div className="min-h-screen px-5 md:px-10 lg:px-15">
                <div className='py-6 max-w-5xl lg:max-w-6xl mx-auto'>
                    <Header></Header>
                    <LocationCardLayout></LocationCardLayout>
                </div>
            </div>
        </>
    )
}