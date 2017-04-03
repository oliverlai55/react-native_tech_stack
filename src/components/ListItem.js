import React, { Component } from 'react';
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
    // if call LayoutAnimation BEFORE component update, then any element or text will fade in slowly
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  //ownProps is exactly same as the props passed into this compoennt, in this case "library"

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
// first argument is for mapStateToProps, it's null for now since we don't need it
// second is taking action creators and bind it
