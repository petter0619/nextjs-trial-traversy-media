import Link from 'next/Link'

import articleStyles from '../styles/Article.module.css'

export default function ArticleItem({article}) {
    return (
        <Link href="/articles/[id]" as={`/articles/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}
