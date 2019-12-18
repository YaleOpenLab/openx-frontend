const chunkArray = (myArray, chunk_size) => {
  const results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
};

export default chunkArray;
