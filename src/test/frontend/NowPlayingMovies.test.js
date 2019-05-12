import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render } from 'enzyme';

import NowPlayingMovies from "../../components/NowPlayingMovies"
import { Link, MemoryRouter } from 'react-router';


Enzyme.configure({ adapter: new Adapter() });

describe('<NowPlayingMovies />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<NowPlayingMovies />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders without crashing again', () => {
		const wrapper = render(<NowPlayingMovies />);
		expect(wrapper).toMatchSnapshot();
	});

	// it('includes link to detail movie page by id', () => {   
	// 	const wrapper = shallow(<MemoryRouter><NowPlayingMovies /></MemoryRouter>);
	// 	expect(wrapper.find('Link').props().to).toBe('/detail/${item.id}');
	// });
                                  
        
});