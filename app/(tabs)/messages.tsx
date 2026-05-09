import { ChevronLeft, Edit, User } from 'lucide-react-native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// If using Expo Router for navigation, you would import useRouter:
// import { useRouter } from 'expo-router';

// --- MOCK CHAT DATA ---
const CHATS = [
  {
    id: '1',
    sender: 'Jonathan Hayes',
    role: 'Lead Concierge',
    lastMessage: 'Your charter to Milan is confirmed for Thursday. The manifest has been updated.',
    time: '10:42 AM',
    unread: true,
  },
  {
    id: '2',
    sender: 'Estates Team',
    role: 'Property Sourcing',
    lastMessage: 'We have arranged a private viewing of the cliffside property for tomorrow afternoon.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: '3',
    sender: 'Procurement',
    role: 'Rare Assets',
    lastMessage: 'The Patek Philippe 5711 has been authenticated and secured. Awaiting your delivery instructions.',
    time: 'Monday',
    unread: false,
  },
  {
    id: '4',
    sender: 'Chef Laurent',
    role: 'Gastronomy',
    lastMessage: 'I have finalized the tasting menu for your dinner party. Please review the wine pairings when you have a moment.',
    time: 'Feb 12',
    unread: false,
  }
];

export default function MessagesList() {
  // const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.chatRow}>
      {/* AVATAR / ICON */}
      <View style={styles.avatarContainer}>
        <User color="#FFFFFF" size={20} strokeWidth={1.2} />
        {item.unread && <View style={styles.unreadBadge} />}
      </View>

      {/* CHAT PREVIEW */}
      <View style={styles.chatDetails}>
        <View style={styles.chatHeader}>
          <Text style={[styles.senderName, item.unread && styles.unreadText]}>
            {item.sender}
          </Text>
          <Text style={[styles.timeText, item.unread && styles.unreadTimeText]}>
            {item.time}
          </Text>
        </View>
        
        <Text style={styles.roleText}>{item.role}</Text>
        
        <Text 
          style={[styles.messagePreview, item.unread && styles.unreadMessagePreview]} 
          numberOfLines={2}
        >
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.iconButton}
          // onPress={() => router.back()}
        >
          <ChevronLeft color="#FFFFFF" size={24} strokeWidth={1.5} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Concierge Desk</Text>
        
        <TouchableOpacity style={styles.iconButton}>
          <Edit color="#FFFFFF" size={20} strokeWidth={1.5} />
        </TouchableOpacity>
      </View>

      {/* CHAT LIST */}
      <FlatList
        data={CHATS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050505',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 40,
  },
  chatRow: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  avatarContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  unreadBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF', // High contrast white for unread instead of a standard blue/red
    borderWidth: 2,
    borderColor: '#050505',
  },
  chatDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 2,
  },
  senderName: {
    color: '#CCCCCC',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  unreadText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  timeText: {
    color: '#555555',
    fontSize: 12,
  },
  unreadTimeText: {
    color: '#FFFFFF',
  },
  roleText: {
    color: '#666666',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  messagePreview: {
    color: '#888888',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
  },
  unreadMessagePreview: {
    color: '#DDDDDD',
    fontWeight: '400',
  },
  separator: {
    height: 1,
    backgroundColor: '#111111',
    marginLeft: 92, // Aligns the separator with the text, not the edge of the screen
  }
});