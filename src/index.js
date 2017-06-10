import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import 'nprogress/nprogress.css';
import './index.scss';

const moment = require('moment');
moment.locale('zh-cn');

ReactDOM.render(<App />, document.getElementById('app'));
