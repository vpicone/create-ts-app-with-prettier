// tslint:disable-next-line:no-any
(global as any).requestAnimationFrame = (cb: any) => {
    setTimeout(cb, 0)
}

import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });