import { whyChooseData } from "../data/whyChooseData"
import WhyChooseCard from "./WhyChooseCard"


const WhyChooseSection = () => {
    return (
        <section className="py-28 w-full px-8 lg:px-32 bg-Light-Grayish-Blue mt-20 md:mt-0">
            <h2 className="text-4xl font-normal font-PublicSans mb-4 text-Dark-Blue text-center md:text-start">Why choose Easybank?</h2>
            <p className="text-lg mb-6 font-PublicSans font-normal text-Grayish-Blue text-center md:text-start">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                {
                    whyChooseData.map((choose) => (
                        <WhyChooseCard key={choose.id} infoChoose={choose}/>
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChooseSection
