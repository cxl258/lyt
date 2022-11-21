import axios from "axios"
 
  const request = axios.create({
  baseURL: "http://182.92.179.97:8001/Zongbiao/EssayGet.php" // 基础路径
})
export default request