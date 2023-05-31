import { AppWrapper }       from './context/state';
import { Poppins }          from 'next/font/google';
import LoadingCurtain       from './components/LoadingCurtain';
import Header               from './components/Header'
import Navbar               from './components/Navbar'
import VideoContainer       from './components/VideoContainer';
import Heading              from './components/Heading';
import ContentSlider        from './components/ContentSlider';
import SelectLanguage       from './components/SelectLanguage';
import SocialMedia          from './components/SocialMedia';
import BlurredEffect        from './components/BlurredEffect';
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Petri77',
  description: 'This is me.',
}


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppWrapper>
          <LoadingCurtain />
          <Header />
          {children}
          <Navbar />
          <VideoContainer />
          <Heading />
          <ContentSlider />
          <SelectLanguage />
          <SocialMedia />
          <BlurredEffect />
        </AppWrapper>
      </body>
    </html>
  )
}
