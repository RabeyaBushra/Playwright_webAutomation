import fs from 'fs';
import path from 'path';

class utils {
  // static property for the JSON file path
  static filePath = path.resolve('Utils/userData.json');

  // static method to read JSON data
  static getData() {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
  }

  // static method to save new user
  static saveData(newUser) {
    const jsonData = this.getData();   // read fresh data each time
    jsonData.push(newUser);            // add new user
    fs.writeFileSync(this.filePath, JSON.stringify(jsonData, null, 2));
  }
}

export default utils;
