import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Title
} from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Root } from "native-base";
const cards = [
  {
    text: "Card One",
    name: "One",
    image:
      "https://lh3.googleusercontent.com/N2lYGS8Wh5105-QO9wFb_nXPmrTGb1wUXgvzq4GB0uSw25fGewthFL1gHJ9O2pAw6Pxn0_LMbqCY8zlsE6GYeVkE96ysomlCZdE82nR1Zt4R_4wUdp6nI-2Xs6K3h8UfBzS59na8ZtAyHQ0GDBWdxrtvgEWs2i70W-zi0CpBP2WnZdsvejC18TAd4FpBNiV1T3kkve2L9UgH2VgPFB82RDcVuhG4gvXOT1Cwypayl4fx5X2yNu2ImzgCMyzAkGQY996r7-rdjHqFuBUXvKlXJpMGp9geKPta7FX610xu-lKTePZCR8__zprihZD8rFCfUBjCyWRYsC_l1aZIGe1SQjKVk0tnnlT4P2k-m0uZ2m4s6TlqfNHBGxb_PWmR4DP_7JRKpKf4kqgYPqFJ4vjVLsNvdOy0SXx3cZhapgQxUwLQSLdA90UZQ-FD8CBXppiXOQQLy3b1zh7o3Ct5vi-5a_Yra2PuZ3snYOyY9WprSElBdP8btYBLmSnKdi-kyyOku4r_ntHH_BlGD0ZknuebaNkUtMFYCpDNcYhdjZTzSaCTjEOrGyDmnT500voQ4gXOgzvQxPlbp5dODiEXMsKCRv4fBpLrkQWDUOVGziY-bQdI4Jf9QBIaT9jsl9yD-6zYEHvI9d3SYoI1ez6btPAb_FI8tYqH7PJRHsCJJHrHIqjhShN_sb28uA9YGOK63i4CErAj5YLfECrKHHItNDH7dYfWgCnaCf9LWfAsFcMwzvc=w1003-h752-no"
  },
  {
    text: "Card Two",
    name: "Two",
    image:
      "https://lh3.googleusercontent.com/BCC1Dg9zbD-jwog5a2no5S1JgKbg60WPSXD8HZqXcYWcfOo1qMepeVqUiq06zOO3gBuXj1nrPv4KSHrdZJ0vBRFfjwqHMmzSGTX1WpkDWmEd4lBZQp7X1jyjW6CPCuKjs9Y6s4d3slffUJS0CJESmZMhyw8r0jBgnvTSRJ_Av6xkSwzFdi55vmpDJVlG2GgIYOZOA5vToVlZBWHiE-GBVkqX2ubXrDlWNXblebEcHMyRBcF-kKJ7jT0GhsVUKJqjVp_EVKf0bwpvV6QQL4XZDnc7GXC-DVcGxW2am6v6Xr5DnUgYgtY7IjYxJzeAHLY0Plbly6K6jItxtHvaLP7KnxqqGSOljl55N5DPC3EWhflGKRlP60nwakms_jGogxtxv-e8PXisJ62hatC5zjU0jr2ueTrRhrhFD-cRKDBQu34v8EjHW3eHeYVBD4enhGtYWEntxKGawMZPN6fJHTacm3FbljL43A_j1lnPp56sz87fTBHr-Fn4uTcUX6MLbXBuLcP5gTOP9u9PY94_O3296RouZ-1WDFnOE2mK4wVGKJMDUmmfVz9LFFRCwJtAYcMbgyZTvfW9XykEoBckDuy5XX9djXTLO8ebukRZFY7_TIuLWAhKEE7o3re5iCLZFuLseVwA6WxYhQTjFlasGjC8WUI6BEmkOSEKrQP9Hql8rfk35MN3FRAHBhjPnueR-PA2tqwJ0jYVcByb7mFBZkbERZnSNz2KWEq1iZ1CKCprkNQ=w1003-h752-no"
  },
  {
    text: "Card Three",
    name: "Three",
    image:
      "https://lh3.googleusercontent.com/VCZ5THUAAWRyTdkzHhHc3lRbrjQFFtLr46aChRLNVVC-I9F-u1EhhSBcC09_qf_d8a2V02AsRB5mR29ausgh6y8nWmcXbM8aWzjsP7yXH1uXpwyLGv5gHAxbyKquajNw1z301aJWYiPOG_UVSt2d8XiJMZyQEU5cbmEaVUt7j-_q4Eh1OmvnSco86q_bSNFQNPO3Jk1onnowIy36UCtdKjwc1j4gfXjMsqfGeX6DU9ZvbU_9sbAVKRHMvEzWtYJSlAyp-jwQLNXK0rLa28TTlhWW5d_N2SgRkPyF0xXiq-460pubny-e6IQZ59JlTU2m5aH40zKRxYPwH-nv-IHIeKChEIip3Hs_9XH8wNE5muYPolLtcWabvnnDKyB-rzWIL5d4gZyenWncjaqzM6f9M6ZsN20IfqpciZQPFxBdtZmogQcn2i4IzPoaA8W-1GUezbjToV7G5yIpikiW1Z84MIUAcemUaYh-etkDBbXHpQYnnoKy55k8JdSyOKazjCuY6YIr3pSKwcLsAiD3Hh0VXgLN38MsIHTq68dJ3R-shIt-WAONtmpmpAr8p789nL-GbNk9-6GQ-HkGPLR6rdNnbG9cArmnfN4-X2AETOoFncKdzJNbroOP3ozoBWdvWCTNXu4WgrPo1jM7yg7PEXrCaKWBGe43elAOWmlC5IURw1JGb3Kg4LhXPDfI_o38yriIqrnWwzgIh02f9wUFTheTntQUme8el16eoWqoDKqMaQ=w452-h602-no"
  },
  {
    text: "Card Four",
    name: "Four",
    image:
      "https://lh3.googleusercontent.com/N2lYGS8Wh5105-QO9wFb_nXPmrTGb1wUXgvzq4GB0uSw25fGewthFL1gHJ9O2pAw6Pxn0_LMbqCY8zlsE6GYeVkE96ysomlCZdE82nR1Zt4R_4wUdp6nI-2Xs6K3h8UfBzS59na8ZtAyHQ0GDBWdxrtvgEWs2i70W-zi0CpBP2WnZdsvejC18TAd4FpBNiV1T3kkve2L9UgH2VgPFB82RDcVuhG4gvXOT1Cwypayl4fx5X2yNu2ImzgCMyzAkGQY996r7-rdjHqFuBUXvKlXJpMGp9geKPta7FX610xu-lKTePZCR8__zprihZD8rFCfUBjCyWRYsC_l1aZIGe1SQjKVk0tnnlT4P2k-m0uZ2m4s6TlqfNHBGxb_PWmR4DP_7JRKpKf4kqgYPqFJ4vjVLsNvdOy0SXx3cZhapgQxUwLQSLdA90UZQ-FD8CBXppiXOQQLy3b1zh7o3Ct5vi-5a_Yra2PuZ3snYOyY9WprSElBdP8btYBLmSnKdi-kyyOku4r_ntHH_BlGD0ZknuebaNkUtMFYCpDNcYhdjZTzSaCTjEOrGyDmnT500voQ4gXOgzvQxPlbp5dODiEXMsKCRv4fBpLrkQWDUOVGziY-bQdI4Jf9QBIaT9jsl9yD-6zYEHvI9d3SYoI1ez6btPAb_FI8tYqH7PJRHsCJJHrHIqjhShN_sb28uA9YGOK63i4CErAj5YLfECrKHHItNDH7dYfWgCnaCf9LWfAsFcMwzvc=w1003-h752-no"
  },
  {
    text: "Card Five",
    name: "Five",
    image:
      "https://lh3.googleusercontent.com/K5G99KxI34wyNm77fEFGSlqi9Xiin2YhtDwNGb2ZMRAslgn2As2YGnieaiEdCbSIsiaCFpReCJEsYhtkOgP2XBBGq3j6Ntwuwdn66GSH5LvN4EdbX6gBwqUIEHMM6m-2aDX3piVsJZtgJ3rg7JYaDWuRY6_CGnJ0rISy3zrkRKg069H18I7Lx-wPOr5nB78zomsSHPAJATorMKIPHRmQXr1WPCsyy6qFUwgKEvCG2_3QDAQL6nyFfXcQQGrtGUSCmjsI6XoF4KvDfovODhBHADAJt_qZGoHvDsImY6h7ybeMxPAKONJFCzxq5vTeAJ1e0f7LD6TH4hkBg0_-qHqusWdJ7yAKxSJ7bEkyENWkWgD-v79dSCEd5RlyQUyl8YLdWJEMomjygWCWT7kn8CEv4yIHbGBqpwWkcbwKQegooDG3RJRQZbbBZ62kwUyl90K06ZE-rYI-h1CnaGv7D7ud3Ee1diDavnwug1wlBDwLtZTY1kjwHBAHEaberAoU9Ssmkyz7Im9fsYg-biJ52naJakp4q0dCBedziZepOawbZKXaCenKfArG-2xG4jaQNz_Co4biCV-UZgQUd-BHZARFHh3mhhYSWdA_cAUKlj-2038ZzstG-MYVmSWcJtgilXNcNKepqe1CcBB4zXMmJR__BykBF9Ie5T_NrvrlS1drwqAJs1eLzaRQwPrfIdvj_Y4LcydO-ICjb8UPUx8mZE1yHNCdleAsUqwHuMZpQug-Vmo=w1003-h752-no"
  }
];
export default class DeckSwiperExample extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Container
        style={{
          marginTop: 100,
          flex: 1
        }}
      >
        <Container>
          <View>
            <DeckSwiper
              dataSource={cards}
              renderItem={item => (
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.image }} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>NativeBase</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={{ uri: item.image }}
                    />
                  </CardItem>
                  <CardItem
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Icon
                      name="md-sad"
                      style={{ color: "rgba(233,29,69,0.2)" }}
                    />
                    <Icon
                      name="md-star"
                      style={{ color: "rgba(233,29,69,0.3)" }}
                    />
                    <Icon
                      name="md-star"
                      style={{ color: "rgba(233,29,69,0.4)" }}
                    />
                    <Icon
                      name="md-star"
                      style={{ color: "rgba(233,29,69,0.5)" }}
                    />
                    <Icon
                      name="md-star"
                      style={{ color: "rgba(233,29,69,0.6)" }}
                    />
                    <Icon
                      name="md-star"
                      style={{ color: "rgba(233,29,69,0.7)" }}
                    />
                    <Icon
                      name="md-star"
                      style={{ color: "rgba(233,29,69,0.8)" }}
                    />
                    <Icon
                      name="md-happy"
                      style={{ color: "rgba(233,29,69,0.9)" }}
                    />
                  </CardItem>
                </Card>
              )}
            />
          </View>
        </Container>
        <View>
          <Text style={{ color: "gray", textAlign: "center" }}>
            This is made with 💙 by pravash
          </Text>
          <Text
            style={{ color: "gray", textAlign: "center" }}
            onPress={() => Linking.openURL("http://www.pravash.tech")}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: "bold",
                textShadowColor: "#000",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
                letterSpacing: 2,
                padding: 10,
                textAlign: "center"
              }}
            >
              www.pravash.tech
            </Text>
          </Text>
        </View>
      </Container>
    );
  }
}
