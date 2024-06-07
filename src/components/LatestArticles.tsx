import { articles } from "../data/articles";
import LastestArticleComponent from "./LastestArticleComponent";

const LatestArticles = () => {
    return (
        <section className="py-28 bg-Very-Light-Gray w-full px-32 flex flex-col gap-6">
            <h2 className="text-4xl font-normal font-PublicSans mb-4 text-Dark-Blue">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {articles.map((article) => (
                    <LastestArticleComponent key={article.title} article = {article}/>
                ))}
            </div>
        </section>
    )
}

export default LatestArticles
