import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

export default function index() {
  return (
  <>
    <div className={sharedStyles.layoutWithBackground}>
    <div className={sharedStyles.layout}>
        <h1 className={`${sharedStyles.animatedContent} ${sharedStyles.firstElement}`}>My Notion Blog</h1>
        <h2 className={`${sharedStyles.animatedContent} ${sharedStyles.secondElement}`}>
          Blazing Fast Notion Blog with Next.js'{' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
        </h2>

      </div>
    </div>

      {/* <Header titlePre="Home" /> */}
  </>
  )
}
