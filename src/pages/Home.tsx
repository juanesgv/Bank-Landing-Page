import Footer from "../components/Footer"
import Header from "../components/Header"
import LatestArticles from "../components/LatestArticles"
import Navbar from "../components/Navbar"
import WhyChooseSection from "../components/WhyChooseSection"

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <WhyChooseSection />
            <LatestArticles />
            <Footer />
        </>
    )
}

export default Home
