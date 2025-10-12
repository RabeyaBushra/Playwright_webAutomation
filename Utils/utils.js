import fs from 'fs';
import jsonData from '../Utils/userData.json';

class utils {
 static filePath = 'Utils/userData.json';

  static saveData(newUser) {

    jsonData.push(newUser);
    fs.writeFileSync(this.filePath, JSON.stringify(jsonData, null, 2));
  }
}

export default utils;