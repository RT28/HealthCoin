import React from 'react';
import { Icon as NBIcon } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { branch, compose, renderComponent } from 'recompose';

const renderOptionComponent = (component, variant) => branch(props => props.variant === variant, renderComponent(component));

const CustomIcon = props => <NBIcon {...props} />;

const RNVIcon = props => <Icon {...props} />;

const FACustomIcon = props => <FAIcon {...props} />;

const enhancedButtonComponent = compose(
  renderOptionComponent(RNVIcon, 'material'),
  renderOptionComponent(FACustomIcon, 'fa'),
)(CustomIcon);

export default enhancedButtonComponent;
