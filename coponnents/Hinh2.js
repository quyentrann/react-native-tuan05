import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Image,
  } from "react-native";
  import Icon from "react-native-vector-icons/FontAwesome";
  import { useState } from "react";
  
  export default function Hinh2() {
    const [stars, setStars] = useState([1, 2, 3, 4, 5]);
    const [numberStarEvaluate, setNumberStarEvaluate] = useState(0);
    const [comment, setComment] = useState("");
  
    let handlePressIconStar = (value) => {
      setNumberStarEvaluate(value);
    };
  
    let handlePressBtnSend = () => {
      alert(`Đánh Giá Sao : ${numberStarEvaluate} - comment : ${comment}`)
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.inforProduct}>
          <Image
            source={require("../assets/usb.jpg")}
            style={{ width: "70px", height: "70px" }}
          />
          <Text style={styles.textInforProduct}>
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
        </View>
        <View style={styles.evaluate}>
          <View style={styles.stars}>
            <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
              Đánh Giá Sao
            </Text>
            <View style={styles.ViewStars}>
              {stars.map((star) => (
                <Icon
                  name="star"
                  size={40}
                  onPress={() => handlePressIconStar(star)}
                  style={{
                    color: star <= numberStarEvaluate ? "#F2DD1B" : "black",
                  }}
                />
              ))}
            </View>
          </View>
          <View style={styles.addImage}>
            <Icon name="camera" size={40} />
            <Text
              style={{ fontSize: "18px", fontWeight: "bold", marginLeft: "10px" }}
            >
              Thêm hình ảnh
            </Text>
          </View>
          <View style={styles.comments}>
            <TextInput
              value={comment}
              multiline
              numberOfLines={8}
              placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
              style={{
                position: "relative",
                width: "100%",
                borderWidth: "1px",
                borderColor: "#C4C4C4",
                fontSize: "18px",
                paddingHorizontal: "20px",
              }}
              onChangeText={(value) => setComment(value)}
            />
          </View>
          <TouchableWithoutFeedback onPress={handlePressBtnSend}>
            <View style={styles.btnSend}>
              <Text style={styles.textBtnSend}>Gửi</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: "20px",
    },
    inforProduct: {
      width: "100%",
      height: "20%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    textInforProduct: {
      fontSize: "16px",
      fontWeight: "bold",
      marginLeft: "10px",
    },
    evaluate: {
      width: "100%",
      height: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    stars: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    ViewStars: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginVertical: "20px",
    },
    addImage: {
      width: "100%",
      height: "80px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: "1px",
      borderColor: "#1511EB",
      borderRadius: "5px",
    },
    comments: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    btnSend: {
      width: "100%",
      height: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1511EB",
      borderRadius: "5px",
    },
    textBtnSend: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "white",
    },
  });
  