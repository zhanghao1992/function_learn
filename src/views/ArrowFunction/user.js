import React from 'react';
class User extends React.PureComponent {

  // shouldComponentUpdate(nextProps) {
  //   console.log(this.props.onDeleteClick === nextProps.onDeleteClick);
  //   return true
  // }
  onDeleteClick = () => {
    const {user, onDeleteClick } = this.props
    onDeleteClick(user.id)
  }

  render() {
    const {name, id } = this.props.user
    console.log(`${name} just rendered`);
    return (
      <li>             
        <input 
          type="button" 
          value="Delete" 
          onClick={this.onDeleteClick} 
        /> 
        {id}
        {name}
      </li>
    );
  }
}

export default User;