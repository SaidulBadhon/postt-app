import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function UpcomingPost() {
  const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const renderDateSection = ({ item }) => {
    return (
      <View style={styles.dateSectionContainer}>
        <View style={styles.dateSectionTextContainer}>
          <Text style={styles.dateSectionText}>{`${formatTime(
            item?.createdAt
          )} via ${item?.platform}`}</Text>
          <Text style={styles.dateSectionTitle}>{item.name}</Text>
          <Text
            style={styles.dateSectionSubText}
          >{`${item?.images?.length} photos`}</Text>
        </View>

        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/76.jpg",
          }}
          // source={{ uri: item?.images[0]?.url }}
          style={styles.dateSectionImage}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Upcoming Posts for Today</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderDateSection}
        contentContainerStyle={styles.flatListContent}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flatListContent: {
    flexGrow: 1,
    rowGap: 16,
    marginTop: 16,
  },
  dateSectionContainer: {
    backgroundColor: "#00000011",
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateSectionTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  dateSectionText: {
    fontSize: 14,
  },
  dateSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  dateSectionSubText: {
    marginTop: 12,
    color: "#00000088",
  },
  dateSectionImage: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: "red",
  },
});

const posts = [
  {
    id: 2,
    createdAt: "2022-01-15T08:30:00.000Z",
    platform: "Instagram",
    name: "Top 10 Tips",
    status: "Published",
    images: [
      { id: 1, url: "https://placehold.co/600x400" },
      { id: 2, url: "https://placehold.co/600x400" },
    ],
  },
  {
    id: 3,
    createdAt: "2023-05-20T12:15:00.000Z",
    platform: "LinkedIn",
    name: "How-To Guide",
    status: "Scheduled",
    images: [
      { id: 1, url: "https://placehold.co/600x400" },
      { id: 2, url: "https://placehold.co/600x400" },
      { id: 3, url: "https://placehold.co/600x400" },
    ],
  },
  {
    id: 4,
    createdAt: "2021-11-30T16:45:00.000Z",
    platform: "Twitter",
    name: "Quick Tips",
    status: "Draft",
    images: [{ id: 1, url: "https://placehold.co/600x400" }],
  },
  {
    id: 5,
    createdAt: "2022-07-01T14:00:00.000Z",
    platform: "Pinterest",
    name: "Visual Showcase",
    status: "Published",
    images: [
      { id: 1, url: "https://placehold.co/600x400" },
      { id: 2, url: "https://placehold.co/600x400" },
      { id: 3, url: "https://placehold.co/600x400" },
      { id: 4, url: "https://placehold.co/600x400" },
    ],
  },
  {
    id: 6,
    createdAt: "2023-03-18T10:25:00.000Z",
    platform: "YouTube",
    name: "Video Explainer",
    status: "Draft",
    images: [{ id: 1, url: "https://placehold.co/600x400" }],
  },
  {
    id: 7,
    createdAt: "2021-10-05T20:00:00.000Z",
    platform: "Facebook",
    name: "Event Announcement",
    status: "Scheduled",
    images: [
      { id: 1, url: "https://placehold.co/600x400" },
      { id: 2, url: "https://placehold.co/600x400" },
    ],
  },
  {
    id: 8,
    createdAt: "2022-09-09T18:45:00.000Z",
    platform: "LinkedIn",
    name: "Industry Trends",
    status: "Published",
    images: [
      { id: 1, url: "https://placehold.co/600x400" },
      { id: 2, url: "https://placehold.co/600x400" },
      { id: 3, url: "https://placehold.co/600x400" },
      { id: 4, url: "https://placehold.co/600x400" },
    ],
  },
  {
    id: 9,
    createdAt: "2023-02-14T07:00:00.000Z",
    platform: "Instagram",
    name: "Valentine's Special",
    status: "Draft",
    images: [
      { id: 1, url: "https://placehold.co/600x400" },
      { id: 2, url: "https://placehold.co/600x400" },
    ],
  },
];
