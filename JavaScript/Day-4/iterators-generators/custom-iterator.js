const OrderNumbersIterator = {
    [Symbol.iterator]() {
      let orderNumber = 0;
      return {
        next() {
          let value = orderNumber === 50 ? undefined : (orderNumber += 5);
          let done = !value;
          return {
              value,
              done,
            };
        },
      };
    },
  };
  for (const value of OrderNumbersIterator) {
    console.log(value);
  }