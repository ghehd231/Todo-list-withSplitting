// export {default as Home} from './Home';
// export {default as About} from './About';
// export {default as Todo } from './App';

//code splitting 
//import withSpliitting from '../WithSpliitting';
import withSplitting from '../WithSpliitting';
export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const Todo = withSplitting(() => import('./App'));