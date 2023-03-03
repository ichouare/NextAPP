
export const metadata = {
    title: 'dashbord App',
    description: 'Next app',
  }

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="">
            <h1 className="">add layout for Dashboard</h1>
            <main>
            {children}
            </main>
            
  
            <article>hdkfhdjksfhdklsfhdlsf</article>
        </div> 
    )
  }