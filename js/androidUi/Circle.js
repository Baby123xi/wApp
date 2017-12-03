import PropTypes from 'prop-types';
import { requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'ImageView',
  propTypes: {
  
    ...View.propTypes // include the default view properties
  },
};

module.exports = requireNativeComponent('MCircle', iface);