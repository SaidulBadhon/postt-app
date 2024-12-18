import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import ScheduleHeader, { HeaderItemButton } from "./_components/ScheduleHeader";
import TopSection from "./_components/TopSection";

const data = [
  {
    id: "friday-25",
    date: "Friday 25",
    slots: [
      {
        id: "friday-25-slot-1",
        time: "09:00",
        posts: [
          {
            id: "post-1",
            title: "Morning Motivation",
            platform: "Twitter",
            image:
              "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80",
            caption: "Rise and shine! Here's to a productive day ahead. ☀️",
          },
        ],
      },
      {
        id: "friday-25-slot-2",
        time: "15:00",
        posts: [
          {
            id: "post-2",
            title: "Team Spotlight",
            platform: "LinkedIn",
            image:
              "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80",
            caption: "Meet Alice, the powerhouse behind our operations. 💼",
          },
        ],
      },
    ],
  },
  {
    id: "saturday-26",
    date: "Saturday 26",
    slots: [
      {
        id: "saturday-26-slot-1",
        time: "11:00",
        posts: [
          {
            id: "post-3",
            title: "Weekend Offer",
            platform: "Facebook",
            image:
              "https://images.unsplash.com/photo-1519340333755-56e9c22bdf9a?q=80",
            caption: "Exclusive weekend deals live now! 🔥 #ShopNow",
          },
        ],
      },
      {
        id: "saturday-26-slot-2",
        time: "17:00",
        posts: [
          {
            id: "post-4",
            title: "User Poll",
            platform: "Twitter",
            image: "",
            caption:
              "What’s your go-to productivity hack? 🛠️ #ShareYourThoughts",
          },
        ],
      },
    ],
  },
  {
    id: "sunday-27",
    date: "Sunday 27",
    slots: [
      {
        id: "sunday-27-slot-1",
        time: "10:00",
        posts: [
          {
            id: "post-5",
            title: "Inspirational Quote",
            platform: "Instagram",
            image:
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80",
            caption:
              "“Do what you can, with what you have, where you are.” – Roosevelt 🌟",
          },
        ],
      },
      {
        id: "sunday-27-slot-2",
        time: "19:00",
        posts: [
          {
            id: "post-6",
            title: "Weekly Recap",
            platform: "LinkedIn",
            image:
              "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80",
            caption:
              "Highlights from this week! What was your favorite moment? 🚀",
          },
        ],
      },
    ],
  },
  {
    id: "monday-28",
    date: "Monday 28",
    slots: [
      {
        id: "monday-28-slot-1",
        time: "08:30",
        posts: [
          {
            id: "post-7",
            title: "Morning Motivation",
            platform: "Twitter",
            image:
              "https://images.unsplash.com/photo-1557682262-4f5d17a2f64d?q=80",
            caption: "Start the week strong with a positive mindset! 💪",
          },
        ],
      },
      {
        id: "monday-28-slot-2",
        time: "13:00",
        posts: [
          {
            id: "post-8",
            title: "Product Update",
            platform: "Facebook",
            image:
              "https://images.unsplash.com/photo-1557682224-dfb2d948f352?q=80",
            caption:
              "Exciting new features have landed in our app! 🚀 #Innovation",
          },
        ],
      },
    ],
  },
  {
    id: "tuesday-29",
    date: "Tuesday 29",
    slots: [
      {
        id: "tuesday-29-slot-1",
        time: "10:00",
        posts: [
          {
            id: "post-9",
            title: "Team Updates",
            platform: "LinkedIn",
            image:
              "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80",
            caption:
              "A glimpse into how our team collaborates and innovates! 💡",
          },
        ],
      },
      {
        id: "tuesday-29-slot-2",
        time: "16:30",
        posts: [
          {
            id: "post-10",
            title: "Q&A Session",
            platform: "Instagram",
            image:
              "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80",
            caption: "Ask us anything! Drop your questions below. 👇 #AMA",
          },
        ],
      },
    ],
  },
  {
    id: "wednesday-30",
    date: "Wednesday 30",
    slots: [
      {
        id: "wednesday-30-slot-1",
        time: "09:00",
        posts: [
          {
            id: "post-11",
            title: "Morning Energy Boost",
            platform: "Instagram",
            image:
              "https://images.unsplash.com/photo-1551719911-1c7d22e76b30?q=80",
            caption:
              "Fuel your day with a strong coffee and even stronger ambitions. ☕",
          },
        ],
      },
      {
        id: "wednesday-30-slot-2",
        time: "18:00",
        posts: [
          {
            id: "post-12",
            title: "Feature Spotlight",
            platform: "Facebook",
            image:
              "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80",
            caption: "Take a closer look at our newest feature. 🔍",
          },
        ],
      },
    ],
  },
  {
    id: "thursday-31",
    date: "Thursday 31",
    slots: [
      {
        id: "thursday-31-slot-1",
        time: "12:00",
        posts: [
          {
            id: "post-13",
            title: "Throwback Thursday",
            platform: "Twitter",
            image:
              "https://images.unsplash.com/photo-1534509014942-bd89d542397e?q=80",
            caption: "Throwing it back to one of our proudest moments! 📸 #TBT",
          },
        ],
      },
      {
        id: "thursday-31-slot-2",
        time: "20:00",
        posts: [
          {
            id: "post-14",
            title: "Engagement Post",
            platform: "Instagram",
            image:
              "https://images.unsplash.com/photo-1557682224-dfb2d948f352?q=80",
            caption:
              "What's your top tip for staying productive? Drop a comment! 👇",
          },
        ],
      },
    ],
  },
  {
    id: "friday-1",
    date: "Friday 1",
    slots: [
      {
        id: "friday-1-slot-1",
        time: "10:00",
        posts: [
          {
            id: "post-15",
            title: "Celebration Post",
            platform: "LinkedIn",
            image:
              "https://images.unsplash.com/photo-1564866657313-170c13b43710?q=80",
            caption: "We’re celebrating a big milestone today! 🎉 #Teamwork",
          },
        ],
      },
      {
        id: "friday-1-slot-2",
        time: "14:00",
        posts: [
          {
            id: "post-16",
            title: "Feedback Friday",
            platform: "Facebook",
            image:
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80",
            caption: "We value your feedback! Share your thoughts below. 📝",
          },
        ],
      },
    ],
  },
];

export default function SocialMediaSchedule() {
  const renderPost = ({ item: post }) => (
    <View
      key={post.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: "rgba(246, 249, 255, 1)",
        padding: 12,
        borderRadius: 16,
      }}
    >
      <Image
        source={{ uri: post.image }}
        style={{ width: 32, height: 32, borderRadius: 8 }}
      />
      <View style={{ gap: 4, flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{post.title}</Text>
        <Text
          style={{
            fontSize: 12,
            color: "#00000055",
            flexWrap: "wrap",
          }}
        >
          {`${post.platform} - ${post.caption}`}
        </Text>
      </View>
    </View>
  );

  const renderSlot = ({ item: slot }) => (
    <View
      key={slot.id}
      style={{
        flexDirection: "row",
        gap: 16,
        marginTop: 8,
        width: "100%",
      }}
    >
      {/* Time Section */}
      <View
        style={{
          width: 50,
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{slot.time}</Text>
        <Text style={{ fontSize: 12, color: "#00000055" }}>AM</Text>
      </View>

      {/* Posts Section */}
      <View style={{ flex: 1, gap: 8 }}>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#00000022",
          }}
        />
        <FlatList
          data={slot.posts}
          keyExtractor={(post) => post.id}
          renderItem={renderPost}
        />
      </View>
    </View>
  );

  const renderDateSection = ({ item: section }) => (
    <View
      key={section.id}
      style={{
        marginBottom: 32,
      }}
    >
      {/* Date Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#000000" }}>
          {section.date}
        </Text>
        <HeaderItemButton
          icon={<Entypo name="dots-three-vertical" size={16} color="black" />}
          color="#ffffff"
          activeOpacity={0.5}
        />
      </View>

      {/* Slots */}
      <FlatList
        data={section.slots}
        keyExtractor={(slot) => slot.id}
        renderItem={renderSlot}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 32,
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header Section */}
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <ScheduleHeader />
        <TopSection />
      </View>

      {/* Main Content */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderDateSection}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
        }}
      />
    </SafeAreaView>
  );
}

// export default function ScheduleScreen() {
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         gap: 32,
//         backgroundColor: "#ffffff",
//       }}
//     >
//       <View
//         style={{
//           paddingInline: 16,
//         }}
//       >
//         <ScheduleHeader />
//         <TopSection />
//       </View>

//       <ScrollView
//         style={{
//           flex: 1,
//           width: "100%",
//           height: "100%",

//           paddingInline: 16,
//         }}
//       >
//         {data.map(({ date, slots, id }) => (
//           <View
//             key={id}
//             style={{
//               marginBottom: 32,
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontWeight: "700",
//                   color: "#000000",
//                 }}
//               >
//                 {date}
//               </Text>

//               <HeaderItemButton
//                 icon={
//                   <Entypo name="dots-three-vertical" size={16} color="black" />
//                 }
//                 color="#ffffff"
//                 activeOpacity={0.5}
//               />
//             </View>

//             <View
//               style={{
//                 gap: 16,
//               }}
//             >
//               {slots.map(({ time, posts, id }) => (
//                 <View
//                   key={id}
//                   style={{
//                     flexDirection: "row",

//                     // backgroundColor: "red",
//                     gap: 16,
//                     marginTop: 8,
//                     width: "100%",
//                   }}
//                 >
//                   <View
//                     style={{
//                       flexDirection: "row",
//                       justifyContent: "space-between",
//                       alignItems: "flex-start",
//                       gap: 16,
//                       //   maxWidth: "20%",
//                       width: 50,
//                       //   backgroundColor: "green",
//                     }}
//                   >
//                     <View
//                       style={{
//                         width: "100%",
//                         alignItems: "flex-end",
//                         justifyContent: "flex-start",
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 16,
//                           fontWeight: "600",
//                         }}
//                       >
//                         {time}
//                       </Text>
//                       <Text
//                         style={{
//                           fontSize: 12,
//                           color: "#00000055",
//                         }}
//                       >
//                         AM
//                       </Text>
//                     </View>
//                   </View>

//                   <View
//                     style={{
//                       //   width: "100%",
//                       flex: 1,
//                       gap: 8,
//                     }}
//                   >
//                     <View
//                       style={{
//                         width: "100%",
//                         height: 18,
//                         justifyContent: "center",
//                       }}
//                     >
//                       <View
//                         style={{
//                           width: "100%",
//                           height: 1,
//                           backgroundColor: "#00000022",
//                         }}
//                       />
//                     </View>

//                     {posts.map(({ title, platform, image, id, caption }) => (
//                       <View
//                         key={id}
//                         style={{
//                           flexDirection: "row",
//                           justifyContent: "start-start",
//                           alignItems: "center",
//                           gap: 8,

//                           backgroundColor: "rgba(246, 249, 255, 1)",

//                           padding: 12,
//                           borderRadius: 16,
//                         }}
//                       >
//                         <View>
//                           {/* <Text>{logo}</Text> */}
//                           <Image
//                             source={{
//                               uri: image,
//                             }}
//                             style={{ width: 32, height: 32, borderRadius: 8 }}
//                           />
//                         </View>

//                         {/*  */}

//                         <View
//                           style={{
//                             gap: 4,
//                           }}
//                         >
//                           <Text
//                             style={{
//                               fontSize: 16,
//                               fontWeight: "600",
//                             }}
//                           >
//                             {title}
//                           </Text>
//                           <Text
//                             style={{
//                               fontSize: 12,
//                               color: "#00000055",
//                               wordWrap: "break-word",
//                               flexWrap: "wrap",
//                               paddingRight: 28,
//                             }}
//                           >
//                             {`${platform} - ${caption}`}
//                           </Text>
//                         </View>
//                       </View>
//                     ))}
//                   </View>
//                 </View>
//               ))}
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
