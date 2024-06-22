import { Text, View } from "react-native";
import YearList from "../component/YearList";

import { MasonryFlashList } from "@shopify/flash-list";

function YearListScreen({ route, navigation }) {
  const questionCollectionList = route.params.questionCollectionList;

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#000" }}>
      <MasonryFlashList
        data={questionCollectionList}
        numColumns={1}
        renderItem={({ item }) => (
          <YearList
            title={item.year}
            questionList={item.questionList}
            navigation={navigation}
          />
        )}
        estimatedItemSize={200}
      ></MasonryFlashList>
    </View>
  );
}
export default YearListScreen;
