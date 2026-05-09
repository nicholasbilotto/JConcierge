import {
  Anchor,
  CarFront,
  Diamond,
  Key,
  Leaf,
  MessageSquare,
  Plane,
  Ticket,
  Utensils
} from 'lucide-react-native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Link, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const GRID_ITEM_WIDTH = (width - 48 - 16) / 2;

const CATEGORIES = [
  { id: 'aviation', title: 'Aviation', subtitle: 'Private Jets & Charters', icon: <Plane color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'yachting', title: 'Yachting', subtitle: 'Charters & Brokerage', icon: <Anchor color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'chauffeur', title: 'Chauffeur', subtitle: 'Secure Ground Travel', icon: <CarFront color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'estates', title: 'Estates', subtitle: 'Off-Market Properties', icon: <Key color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'gastronomy', title: 'Gastronomy', subtitle: 'Priority Reservations', icon: <Utensils color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'access', title: 'Access', subtitle: 'VIP & Sold-Out Events', icon: <Ticket color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'procurement', title: 'Procurement', subtitle: 'Fine Goods & Rarities', icon: <Diamond color="#FFFFFF" size={32} strokeWidth={1} /> },
  { id: 'wellness', title: 'Wellness', subtitle: 'Medical & Retreats', icon: <Leaf color="#FFFFFF" size={32} strokeWidth={1} /> }
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Command Center</Text>
          <Text style={styles.name}>Welcome, Sir.</Text>
        </View>

        <View style={styles.quickActionsWrapper}>
             <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickActionsContainer}>
            <TouchableOpacity style={styles.quickActionPill} onPress={() => router.push('/messages')}>
                <MessageSquare color="#FFFFFF" size={14} strokeWidth={1.5} />
                <Text style={styles.quickActionText}>Concierge Desk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionPill}>
                <Plane color="#FFFFFF" size={14} strokeWidth={1.5} />
                <Text style={styles.quickActionText}>Active Itinerary</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>

        <View style={styles.gridContainer}>
          {CATEGORIES.map((category) => (
            <Link key={category.id} href={`/service/${category.id}`} asChild>
              <TouchableOpacity activeOpacity={0.7} style={styles.gridItem}>
                  <View style={styles.gridIconWrapper}>
                      {category.icon}
                  </View>
                  <Text style={styles.gridTitle}>{category.title}</Text>
                  <Text style={styles.gridSubtitle}>{category.subtitle}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  scrollContent: { paddingBottom: 40 },
  header: { paddingHorizontal: 24, paddingTop: 80, paddingBottom: 24 },
  greeting: { color: '#666666', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', fontWeight: '600', marginBottom: 8 },
  name: { color: '#FFFFFF', fontSize: 32, fontWeight: '300', letterSpacing: 0.5 },
  quickActionsWrapper: { marginBottom: 32 },
  quickActionsContainer: { paddingHorizontal: 24, gap: 10 },
  quickActionPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0A0A0A', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 50, borderWidth: 1, borderColor: '#1F1F1F' },
  quickActionText: { color: '#FFFFFF', fontSize: 13, fontWeight: '500', marginLeft: 10, letterSpacing: 0.5 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 24, justifyContent: 'space-between', gap: 16 },
  gridItem: { width: GRID_ITEM_WIDTH, aspectRatio: 1, backgroundColor: '#0A0A0A', borderRadius: 20, padding: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#1A1A1A' },
  gridIconWrapper: { marginBottom: 20 },
  gridTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '400', letterSpacing: 0.8, marginBottom: 6, textAlign: 'center' },
  gridSubtitle: { color: '#666666', fontSize: 11, fontWeight: '400', letterSpacing: 0.4, textAlign: 'center', textTransform: 'uppercase' }
});
