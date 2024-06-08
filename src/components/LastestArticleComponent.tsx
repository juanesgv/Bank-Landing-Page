import { Article } from '../interfaces/index';

interface Props {
    article: Article
}

const LastestArticleComponent = ({article}: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform hover:scale-105">
            <img src={article.image} alt={`imagen: ${article.image}`} className="w-full h-60 object-cover"/>
            <div className="p-6 flex flex-col gap-4">
                <p className="text-sm font-PublicSans font-normal text-Grayish-Blue">{article.author}</p>
                <a href='#option' className="text-xl font-normal font-PublicSans mb-4 text-Dark-Blue hover:text-Lime-Green">{article.title}</a>
                <p className="text-lg font-PublicSans font-normal text-Grayish-Blue line-clamp-4">{article.content}</p>
            </div>
        </div>
    )
}

export default LastestArticleComponent
