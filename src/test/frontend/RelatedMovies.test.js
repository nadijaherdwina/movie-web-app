import React from 'react';
import ReactDOM from 'react-dom';
import RelatedMovies from "../../components/RelatedMovies"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<RelatedMovies />', () => {

        const match = {params : {id : 11631}};

        it('renders without crashing', () => {
                const wrapper = shallow(<RelatedMovies match={match}/>);
                expect(wrapper).toMatchSnapshot();
        });
    
        it('renders without crashing again', () => {
                const wrapper = shallow(<RelatedMovies match={match}/>);
                expect(wrapper.containsMatchingElement(<div className="col" id="11631"></div>))
        });
});