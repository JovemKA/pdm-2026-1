import { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export function DraggableItem({ item }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const initialX = useSharedValue(0);
  const initialY = useSharedValue(0);
  const itemRef = useRef(null);

  const updatePosition = (fx, fy, width, height, px, py) => {
    initialX.value = px + width / 2;
    initialY.value = py + height / 2;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (itemRef.current) {
        itemRef.current.measure(updatePosition);
      }
    }, 500); // Delay para garantir layout
    return () => clearTimeout(timeoutId);
  }, []);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      // TODO: Implementar lógica de encaixe e retorno aqui (para o aluno):
      // 1. Calcular posição final do centro do item:
      //    const finalX = initialX.value + event.translationX;
      //    const finalY = initialY.value + event.translationY;
      // 2. Comparar com bounds das drop zones (receber como props ou Context):
      //    ex: if (finalX > gostoLeft && finalX < gostoRight && finalY > gostoTop && finalY < gostoBottom)
      // 3. Se encaixa, animar para posição alvo na zone:
      //    translateX.value = withSpring(gostoCenterX - initialX.value);
      //    translateY.value = withSpring(gostoCenterY - initialY.value);
      //    // Opcional: callback para adicionar item à zone
      // 4. Senão, retornar à origem:
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View ref={itemRef} style={[styles.item, animatedStyle]}>
        <Text style={styles.itemText}>{item}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 80,
    height: 80,
    backgroundColor: "#FF6B6B",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DraggableItem;
