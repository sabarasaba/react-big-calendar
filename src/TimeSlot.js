import React, { PropTypes, Component } from 'react'
import cn from 'classnames'
import { elementType } from './utils/propTypes'


export default class TimeSlot extends Component {
  static propTypes = {
    dayWrapperComponent: elementType,
    value: PropTypes.instanceOf(Date).isRequired,
    isNow: PropTypes.bool,
    showLabel: PropTypes.bool,
    content: PropTypes.string,
    culture: PropTypes.string,
    resource: PropTypes.string
  }

  static defaultProps = {
    isNow: false,
    showLabel: false,
    content: ''
  }

  render() {
    const { value, resource } = this.props;
    const Wrapper = this.props.dayWrapperComponent;

    return (
      <Wrapper value={value} resource={resource}>
        <div
          className={cn(
            'rbc-time-slot',
            this.props.showLabel && 'rbc-label',
            this.props.isNow && 'rbc-now',
          )}
        >
        {this.props.showLabel &&
          <span>{this.props.content}</span>
        }
        </div>
      </Wrapper>
    )
  }
}
