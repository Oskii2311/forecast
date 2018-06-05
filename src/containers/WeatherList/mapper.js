function mapStateToProps({ weather, weatherHasErrored, weatherIsLoading }) {
  return {
    weather,
    weatherHasErrored,
    weatherIsLoading,
  };
}

export default mapStateToProps;
