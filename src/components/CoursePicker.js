import styled from "styled-components";
import PropTypes from "prop-types";

const Select = styled.select`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};  
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(38, 38, 38);
  }
`;

function CoursePicker({register}) {
    return (
          <Select name="from" onChange={register.onChange} onBlur={register.onBlur} name={register.name} ref={register.ref}>
            <option value="1">월수금 7시반 시작</option>
            <option value="2">월수금 8시반 시작</option>
          </Select>
    )
}

CoursePicker.propTypes = {
  register: PropTypes.object.isRequired,
};

export default CoursePicker;
