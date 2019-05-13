import React from 'react';
import ReactDOM from 'react-dom';
import DetailMovie from "../../components/DetailMovie"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<DetailMovie />', () => {

        const match = {params : {id : 11631}};

        it('renders without crashing', () => {
                const wrapper = shallow(<DetailMovie match={match}/>);
                expect(wrapper).toMatchSnapshot();
        });
    
        it('contains specific id', () => {
                const wrapper = shallow(<DetailMovie match={match}/>);
                expect(wrapper.containsMatchingElement(<div className="col" id="11631"></div>))
        });
});