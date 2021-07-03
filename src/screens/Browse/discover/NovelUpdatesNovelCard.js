import React from "react";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { Row } from "../../../components/Common";

const GenreChip = ({ children, theme }) => (
    <View style={{ flexDirection: "row" }}>
        <Text
            style={[styles.genreChip, { color: theme.textColorSecondary }]}
            numberOfLines={2}
        >
            <Text
                style={[
                    styles.genreChip,
                    {
                        color: theme.textColorPrimary,
                        fontSize: 14,
                    },
                ]}
            >
                {`${"Genre "}`}
            </Text>
            {children}
        </Text>
    </View>
);

const NovelUpdatesNovelCard = ({ novel, theme, onPress }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colorPrimary,
                borderRadius: 8,
                elevation: 1,
                marginHorizontal: 12,
                marginVertical: 4,
            }}
        >
            <Pressable
                style={styles.novelUpdatesCard}
                onPress={onPress}
                android_ripple={{ color: theme.rippleColor, borderless: true }}
            >
                <FastImage
                    source={{ uri: novel.novelCover }}
                    style={{
                        width: 130,
                        height: 180,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 8,
                        paddingVertical: 8,
                    }}
                >
                    <Text
                        style={{ color: theme.textColorPrimary, fontSize: 17 }}
                    >
                        {novel.novelName}
                    </Text>

                    <GenreChip theme={theme}>{novel.genres}</GenreChip>
                    <View style={{ flexDirection: "row", marginBottom: 4 }}>
                        <Text
                            style={[
                                styles.genreChip,
                                { color: theme.textColorSecondary },
                            ]}
                            numberOfLines={2}
                        >
                            <Text
                                style={[
                                    styles.genreChip,
                                    {
                                        color: theme.textColorPrimary,
                                        fontSize: 14,
                                    },
                                ]}
                            >
                                {`${"Chapter Count "}`}
                            </Text>
                            {novel.chapterCount}
                        </Text>
                    </View>

                    <Text
                        style={{
                            fontSize: 12,
                            color: theme.textColorSecondary,
                            marginTop: 8,
                        }}
                        numberOfLines={4}
                    >
                        {novel.novelSummary}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default NovelUpdatesNovelCard;

const styles = StyleSheet.create({
    novelUpdatesCard: {
        flex: 1,
        flexDirection: "row",
    },
    contentContainer: {
        flex: 1,
    },
    genreChip: {
        marginTop: 4,
        fontSize: 13,
        // fontStyle: "italic",
    },
});