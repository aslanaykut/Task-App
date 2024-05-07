const setCategory = value => {
  switch (value) {
    case 0:
      return 'Bills';
      break;
    case 1:
      return 'Courses';
      break;
    case 2:
      return 'Date';
      break;
    default:
      return '';
      break;
  }
};

export {setCategory};
