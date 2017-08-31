/**
 * The initial application state is set here
 */

import { fromJS } from 'immutable';

import getConfig from '../../config';
const config = getConfig();

export default fromJS({
    title: config.title
});

