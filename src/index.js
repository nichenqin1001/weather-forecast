import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.scss';

const moment = require('moment');
moment.locale('zh-cn');

ReactDOM.render(<App />, document.getElementById('app'));
