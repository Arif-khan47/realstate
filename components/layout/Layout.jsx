import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import Head from 'next/head'

const Layout = ({
    hideHeader = false,
    hideFooter = false,
    children,
    title = "M20"
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {
                !hideHeader && <nav> <Header />  </nav>
            }
            <main>
                {children}
            </main>

            {
                !hideFooter && <footer><Footer /></footer>
            }
        </>
    )
}

export default Layout