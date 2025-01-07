// setupTests.js
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

// Apply Enzyme adapter
configure({ adapter: new Adapter() });

// Polyfill for TextEncoder and TextDecoder (for Jest compatibility)
if (typeof global.TextEncoder === 'undefined') {
    const { TextEncoder, TextDecoder } = require('util');
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}
