const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  fs.readFile("./lastname.txt", (err, data2) => {
    fs.readFile("./age.txt", (err, data3) => {
      fs.readFile("./hobbies.txt", (err, data4) => {
        const hobbies = JSON.parse(data4.toString()).join(" and ");
        console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies}`);
      });
    });
  });
})