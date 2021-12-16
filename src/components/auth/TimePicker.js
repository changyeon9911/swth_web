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

function TimePicker({register}) {
    return (
          <Select name="from" onChange={register.onChange} onBlur={register.onBlur} name={register.name} ref={register.ref}>
            <option value="1:0">1:00</option>
            <option value="2:0">2:00</option>
            <option value="3:0">3:00</option>
            <option value="4:0">4:00</option>
            <option value="5:0">5:00</option>
          </Select>
    )
}

TimePicker.propTypes = {
  register: PropTypes.object.isRequired,
};

export default TimePicker;
