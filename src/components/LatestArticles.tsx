const articles = [
    {
        title: 'Receive money in any currency with no fees',
        author: 'Claire Robinson',
        content: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...',
    },
    {
        title: 'Treat yourself without worrying about money',
        author: 'Wilson Hutton',
        content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...',
    },
    {
        title: 'Take your Easybank card wherever you go',
        author: 'Wilson Hutton',
        content: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...',
    },
    {
        title: 'Our invite-only Beta accounts are now live!',
        author: 'Claire Robinson',
        content: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    },
];

const LatestArticles = () => {
    return (
        <section className="py-10 bg-gray-100 w-full px-32">
            <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">By {article.author}</p>
                        <p className="text-gray-600">{article.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LatestArticles
