import Wrapper from '../components/Wrapper';
import Header from '../layouts/header';
import About from '../layouts/about';
import Testimony from '../layouts/testimony';
import Portfolio from '../layouts/portfolio';
import Footer from '../layouts/footer';
export default function Index() {
	return (
		  <Wrapper>
			  <Header />
			  <About />
			  <Testimony />
			  <Portfolio />
			  <Footer />
		  </Wrapper>

	);
}
