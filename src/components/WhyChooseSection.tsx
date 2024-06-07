import WhyChooseCard from "./WhyChooseCard"

const WhyChooseSection = () => {
    return (
        <section className="py-28 w-full px-32 bg-Light-Grayish-Blue">
            <h2 className="text-4xl font-normal font-PublicSans mb-4 text-Dark-Blue">Why choose Easybank?</h2>
            <p className="text-lg mb-6 font-PublicSans font-normal text-Grayish-Blue">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                <WhyChooseCard/>
                <WhyChooseCard/>
                <WhyChooseCard/>
                <WhyChooseCard/>
            </div>
        </section>
    )
}

export default WhyChooseSection
