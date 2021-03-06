const validate = (values) => {
  const errors = {}
  if (values.username && values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.username = 'Required'
  } else if (values.password.length < 6) {
    errors.username = 'Must be 6 characters or more'
  }
  return errors
}

export default validate