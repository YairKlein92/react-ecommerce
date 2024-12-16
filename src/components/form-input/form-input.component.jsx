import {FormInputLabel, Input, Group} from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {' '}
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
        shrink= {otherProps.value.length}
          // className={`${
          //   otherProps.value.length > 0 ? 'shrink' : ''
          // } form-input-label`}
          // htmlFor="displayName"
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
