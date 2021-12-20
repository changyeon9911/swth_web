import PropTypes from "prop-types";
import styled from "styled-components";

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

function LevelPicker({ register }) {
    return (
          <Select onChange={register.onChange} onBlur={register.onBlur} name={register.name} ref={register.ref}>
            <option value="1">초급</option>
            <option value="2">중급</option>
            <option value="3">고급</option>
          </Select>
    )
}

LevelPicker.propTypes = {
  register: PropTypes.object.isRequired,
};

export default LevelPicker;

