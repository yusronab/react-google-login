import '../styles/App.css';
import Navigation from '../components/Navigation'
import Heading from '../components/Heading';
import FormFilter from '../components/FormFilter';
import ResultFilter from '../components/ResultFilter'

function Blog() {
    return (
        <div className="blog-page">
            <Navigation />
            <Heading />
            <FormFilter />
            <ResultFilter />
        </div>
    )
}

export default Blog