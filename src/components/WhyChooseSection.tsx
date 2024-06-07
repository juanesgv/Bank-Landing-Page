
const WhyChooseSection = () => {
    return (
        <section className="py-28 w-full px-32">
            <h2 className="text-3xl font-bold mb-6">Why choose Easybank?</h2>
            <p className="text-gray-600">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full mb-4">Icon</div>
                    <h3 className="text-xl font-semibold">Online Banking</h3>
                    <p className="text-gray-600">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full mb-4">Icon</div>
                    <h3 className="text-xl font-semibold">Simple Budgeting</h3>
                    <p className="text-gray-600">See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                </div>
                <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full mb-4">Icon</div>
                    <h3 className="text-xl font-semibold">Fast Onboarding</h3>
                    <p className="text-gray-600">We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-full mb-4">Icon</div>
                    <h3 className="text-xl font-semibold">Open API</h3>
                    <p className="text-gray-600">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseSection
