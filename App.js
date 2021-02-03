import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'NotoSansMyanmar-Bold': require('./assets/fonts/NotoSansMyanmar-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'NotoSansMyanmar-Bold', fontSize: 15 }}>
        {
          `むかしむかし、 あるちいさなむらにゆきというむすめがおばあさんとふたりでくらしていました。ゆきは、とてもうつくしいこでしたが、ふたりはたいへんまずしいせいかつをしていました。むらぜんたいもまずし く、わかもののすがたもあまりみられませんでした。そして、ゆきとけっこんしたいというものも、だれひとりとしてあらわれたことはありませんでした。
「ゆきや、おまえのしあわせをさがすために、みやこにいったほうがいいよ」とまいにちおばあさんはいいました。「おばあさまをひとりここにのこしてみやこへでかけることはできません」とそのたび、ゆきはこたえました。
あるひ、おばあさんはなくなりました。 おばあさんをおはかにほうむってから、ゆきはなけなしのかざいをあつめ、みやこへむけてしゅっぱつしました。`
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
});
