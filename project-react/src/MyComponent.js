import PropTypes from "prop-types"
const MyComponent = ({name, favoriteNumber, children}) => {
  return(
    <div>
      안녕하세요, 제이름은 {name} 입니다. <br/>
      children 값은 {children} 입니다. <br/>
      제가 좋아하는 숫자는 {favoriteNumber} 입니다!!!
    </div>
  );
};
MyComponent.defalultProps = {
  name: "기본이름",
};
MyComponent.propTypes = {
  name:PropTypes.string,
  //무조건 문자열 형태로 전달해야 한다.
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;