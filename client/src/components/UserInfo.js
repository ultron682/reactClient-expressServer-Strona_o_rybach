function UserInfo(props) {
  return (
    <ul>
      {" "}
        {props.userInfo.firstName} {props.userInfo.lastName} {props.userInfo.email} 
    </ul>
  );
}
export default UserInfo;
