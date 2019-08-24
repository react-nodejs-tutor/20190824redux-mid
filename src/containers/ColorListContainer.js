import React, { Component } from 'react';
import ColorList from '../components/ColorList';
import { connect } from 'react-redux';
import * as colorListActions from '../store/modules/colorList';
import * as counterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class ColorListContainer extends Component {
	render() {
		const { input, list, ColorListActions, CounterActions } = this.props;

		return (
			<ColorList
				input={input}
				list={list}
				ColorListActions={ColorListActions}
				CounterActions={CounterActions}
			/>
		);
	}
}

const mapStateToProps = ({ colorList: { input, list } }) => ({
	input,
	list
});

const mapDispatchToProps = dispatch => ({
	ColorListActions: bindActionCreators(colorListActions, dispatch),
	CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorListContainer);
