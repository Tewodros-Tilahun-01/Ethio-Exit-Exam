import { Text, View } from "react-native";
import YearList from "../component/YearList";

import { MasonryFlashList } from "@shopify/flash-list";

function YearListScreen({ route, navigation }) {
  const { questionCollectionList, courses } = route.params;

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={questionCollectionList}
        numColumns={1}
        renderItem={({ item }) => (
          <YearList
            courses={courses}
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

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 5,
  },
};
