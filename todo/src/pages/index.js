// export {default as Home} from './Home';
// export {default as About} from './About';
// export {default as Todo } from './App';

//code splitting 
import withSplitting from '../WithSpliitting';
export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const Todo = withSplitting(() => import('./Todo'));