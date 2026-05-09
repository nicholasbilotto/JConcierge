import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { ChevronLeft, ShieldCheck, Clock, MapPin } from 'lucide-react-native';

const SERVICE_DATA: any = {
  aviation: { title: 'Aviation', description: 'Access a fleet of over 5,000 private aircraft globally. From light jets for regional travel to ultra-long-range jets for transcontinental flights.', features: ['Global Dispatch 24/7', 'VIP Terminal Access', 'In-flight Bespoke Catering'] },
  yachting: { title: 'Yachting', description: 'Curated selection of superyachts for charter. Specialized brokerage for acquisitions and management.', features: ['Full Crew Staffing', 'Itinerary Planning', 'Water Sports Equipment'] },
  chauffeur: { title: 'Chauffeur', description: 'Professional, high-security ground transportation in every major city. Armor-plated vehicles available upon request.', features: ['Vetted Drivers', 'Real-time Tracking', 'Encrypted Communications'] },
  estates: { title: 'Estates', description: 'Exclusive access to off-market luxury real estate. Short-term rentals and long-term portfolio management.', features: ['Private Viewing', 'Staffing Solutions', 'Interior Design Prep'] },
  gastronomy: { title: 'Gastronomy', description: 'Guaranteed reservations at Michelin-starred restaurants and private dining experiences with world-renowned chefs.', features: ['Last-minute Booking', 'Wine Pairing Experts', 'Private Kitchen Access'] },
  access: { title: 'Access', description: 'Obtain tickets to sold-out global events. Front-row seats, backstage passes, and gala invitations.', features: ['Red Carpet Access', 'Personal Concierge', 'Travel Logistics'] },
  procurement: { title: 'Procurement', description: 'Sourcing of rare timepieces, limited edition vehicles, and fine art through our global network of experts.', features: ['Authentication', 'Secure Delivery', 'Global Sourcing'] },
  wellness: { title: 'Wellness', description: 'Private medical services, elite wellness retreats, and personalized fitness regimens with industry leaders.', features: ['Concierge Medicine', 'Holistic Retreats', 'Elite Coaching'] },
};

export default function ServiceDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const service = SERVICE_DATA[id as string] || { title: 'Service', description: 'Details coming soon.' };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <ChevronLeft color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{service.title}</Text>
          <Text style={styles.description}>{service.description}</Text>

          <View style={styles.featureGrid}>
            {service.features?.map((feature: string, index: number) => (
              <View key={index} style={styles.featureItem}>
                <ShieldCheck color="#FFFFFF" size={16} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          <View style={styles.infoBlock}>
            <View style={styles.infoItem}>
              <Clock color="#666666" size={20} />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoLabel}>Availability</Text>
                <Text style={styles.infoValue}>24/7 Global Response</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <MapPin color="#666666" size={20} />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoLabel}>Locations</Text>
                <Text style={styles.infoValue}>Worldwide Coverage</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.bookingButton}>
        <Text style={styles.bookingButtonText}>Request Service</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  scrollContent: { paddingBottom: 100 },
  header: { paddingTop: 60, paddingHorizontal: 24, marginBottom: 20 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center' },
  content: { paddingHorizontal: 24 },
  title: { color: '#FFFFFF', fontSize: 36, fontWeight: '300', marginBottom: 20 },
  description: { color: '#AAAAAA', fontSize: 16, lineHeight: 24, marginBottom: 32, fontWeight: '300' },
  featureGrid: { marginBottom: 40 },
  featureItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  featureText: { color: '#FFFFFF', fontSize: 14, marginLeft: 12, fontWeight: '400' },
  infoBlock: { borderTopWidth: 1, borderTopColor: '#1A1A1A', paddingTop: 32 },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  infoTextWrapper: { marginLeft: 16 },
  infoLabel: { color: '#666666', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 },
  infoValue: { color: '#FFFFFF', fontSize: 14, marginTop: 2 },
  bookingButton: { position: 'absolute', bottom: 30, left: 24, right: 24, backgroundColor: '#FFFFFF', height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  bookingButtonText: { color: '#000000', fontSize: 16, fontWeight: '600', letterSpacing: 0.5 }
});
