import ArticleItem from './ArticleItem'

import articleStyles from '../styles/Article.module.css'

export default function ArticleList({ articles }) {
    return (
        <div className={articleStyles.grid}>
            {articles.map(a => {
                return <ArticleItem article={a} key={a.id} />
            })}
        </div>
    )
}
